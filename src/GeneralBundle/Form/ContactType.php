<?php

namespace GeneralBundle\Form;

use GeneralBundle\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstname', TextType::class, [
                'attr' => ['placeholder' => 'Prénom' ],
            ])
            ->add('lastname', TextType::class, [
                'attr' => ['placeholder' => 'Nom' ],
            ])
            ->add('email', EmailType::class, [
                'attr' => ['placeholder' => 'Votre email' ],
            ])
            ->add('subject', TextType::class, [
                'attr' => ['placeholder' => 'Sujet du message' ],
            ])
            ->add('message', TextareaType::class, [
                'attr' => ['rows' => '3', 'placeholder' => 'Votre message' ],
            ])
            ->add('agreement', CheckboxType::class, [
                'attr' => ['class' => 'custom-control-input'],
            ])
            ->getForm();
    }
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'GeneralBundle\Entity\Contact'
//            'data_class' => Contact::class
        ));
    }

//    /**
//     * {@inheritdoc}
//     */
//    public function getBlockPrefix()
//    {
//        return 'generalbundle_contact';
//    }


}
