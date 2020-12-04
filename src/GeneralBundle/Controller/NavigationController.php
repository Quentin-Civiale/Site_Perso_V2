<?php

namespace GeneralBundle\Controller;

use GeneralBundle\Entity\Contact;
use GeneralBundle\Form\ContactType;
use GeneralBundle\Helpers\ContactNotification;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;

class NavigationController extends Controller
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

    public function homeAction(Request $request, ContactNotification $notification)
    {
        $form = $this->addForm($request, $notification, 'general_homepage');

        if ($form instanceof FormInterface) {
            return $this->render('@General/Default/index.html.twig', [
                'form' => $form->createView()
            ]);
        } else {
            return $form;
        }
    }

    public function resumeAction(Request $request, ContactNotification $notification)
    {
        $form = $this->addForm($request, $notification, 'resume');

        if ($form instanceof FormInterface) {
            return $this->render('@General/Default/resume.html.twig', [
                'form' => $form->createView()
            ]);
        } else {
            return $form;
        }
    }

    public function blogAction(Request $request, ContactNotification $notification)
    {
        $form = $this->addForm($request, $notification, 'blog');

        if ($form instanceof FormInterface) {
            return $this->render('@General/Default/blog.html.twig', [
                'form' => $form->createView()
            ]);
        } else {
            return $form;
        }

    }

    public function legalNoticeAction(Request $request, ContactNotification $notification)
    {
        $form = $this->addForm($request, $notification, 'legalNotice');

        if ($form instanceof FormInterface) {
            return $this->render('@General/Default/legalNotice.html.twig', [
                'form' => $form->createView()
            ]);
        } else {
            return $form;
        }

    }
}