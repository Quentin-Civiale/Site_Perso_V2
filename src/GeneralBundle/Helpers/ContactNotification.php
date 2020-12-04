<?php

namespace GeneralBundle\Helpers;

use Doctrine\ORM\Mapping as ORM;
use GeneralBundle\Entity\Contact;
use Twig\Environment;

/**
 * @ORM\Entity
 * @ORM\Table(name="contact_notification")
 */
class  ContactNotification {
    /**
     * @var \Swift_Mailer
     */
    private $mailer;

    /**
     * @var Environment
     */
    private $renderer;

    public function __construct(\Swift_Mailer $mailer, Environment $renderer)
    {
        $this->mailer = $mailer;
        $this->renderer = $renderer;
    }

    public function notify(Contact $contact) {

        $message = \Swift_Message::newInstance()
            ->setSubject('Site quentin-civiale.fr - Contact : ' . $contact->getFirstname() . $contact->getLastname())
            ->setFrom($contact->getEmail())
            ->setTo(['devtestoc@gmail.com' => 'Quentin-Civiale'])
            ->setReplyTo($contact->getEmail())
            ->setCharset('utf-8')
            ->setContentType('text/html')
            ->setBody($this->renderer->render('@General/Default/contact.html.twig', [
                'contact' => $contact
            ]));

        $this->mailer->send($message);
    }
}