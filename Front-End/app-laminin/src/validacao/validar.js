import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const EsquemaValidacaoConsultor = Yup.object().shape({

    nome: Yup.string()
        .min(3, 'O nome é muito curto..!')
        .max(50, 'Too Long!')
        .required('O Campo obrigatorio'),

    email: Yup.string().email('Email invalido').required('Required'),

    password: Yup.string()

        .min(4, 'A senha não é valida, é curta')
        .required('O Campo obrigatorio'),

});


export default EsquemaValidacaoConsultor;