<?php

namespace GeneralBundle\Controller;

use GeneralBundle\Entity\Contact;
use GeneralBundle\Form\ContactType;
use GeneralBundle\Helpers\ContactNotification;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;

class BlogController extends Controller
{
    public function addForm(Request $request, ContactNotification $notification, string $redirection)
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $notification->notify($contact);
            $this->addFlash('contactFormSuccess', 'Votre message a bien été envoyé !');
            return $this->redirectToRoute($redirection);
        }

        return $form;
    }

    public function articleDetailAction(Request $request, ContactNotification $notification)
    {
        $form = $this->addForm($request, $notification, 'articleDetail');

        if ($form instanceof FormInterface) {
            return $this->render('@General/Default/articleDetail.html.twig', [
                'form' => $form->createView()
            ]);
        } else {
            return $form;
        }
    }

    public function articlesDetailAction(Request $request, ContactNotification $notification)
    {
        $form = $this->addForm($request, $notification, 'articlesDetail');

        if ($form instanceof FormInterface) {
            return $this->render('@General/Default/articlesDetail.html.twig', [
                'form' => $form->createView()
            ]);
        } else {
            return $form;
        }
    }
}
