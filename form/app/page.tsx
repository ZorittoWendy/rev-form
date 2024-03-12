'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import Radiobox from './Components/RadioBox';
import ToggleSwitch from './Components/toggle';
import { Input } from './Components/Input';


const schema = z.object({
  fullname: z.string().min(1, 'O nome deve invalido ').max(100, 'O nome de ter no max 100 caracteres'),
  documentNumber:z.string().min(11, 'cpf invalido' ),
  email:z.string().min(9, 'Email Invalido'),
  birthdate:z.string().min(9, 'Data de nascimento invalida'),
  zipcode:z.string().min(8, 'Digite um cep valido'),
  phoneNumber:z.string().min(11, 'Digite um numero valido'),
  addressNumber:z.string().max(40, 'adicione um numero valido'),
  addressState:z.string().max(2, 'Insira o numero valido'),
  country:z.string().min(6,'insira um pais valido'),
  city:z.string().min(9,'insira uma cidade valido'),
  addressDistrict:z.string().min(9,'insira um bairro valido'),
  addressStreet:z.string().min(9, 'Insira um endreço valido'),
  addressComplement:z.string(),
  
  password: z.string().min(10, 'A senha de ter no minimo 10 caracteres').regex(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'),
  confirmPassword: z.string()
}).refine((fields) => fields.password === fields.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas precisam ser iguais'
});

type FormProps = z.infer<typeof schema>;




export default function Form() {

  const {register, handleSubmit, formState: {errors} } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema)
  });

  console.log('errors', errors)

  const handleForm = (data: FormProps) => {
    console.log(data)
  };

  return (
    <main className="bg-slate-50 max-w-4xl mx-auto p-24">
      <form onSubmit={handleSubmit(handleForm)}>
          

          <Input
            type="text"
            placeholder="José Aldo" 
            {... register('fullname')}
            label='Nome completo'
          />
          {errors.fullname?.message && (
            <p className='text-red-500'>{errors.fullname.message}</p>
          )}

          
          <Input
            type="text"
            placeholder="111.333.444-22" 
            {... register('documentNumber')}
            label='CPF'
          />
          {errors.documentNumber?.message && (
            <p className='text-red-500'>{errors.documentNumber.message}</p>
          )}

         
          <Input
            type="text"
            placeholder="10/10/1001" 
            {... register('birthdate')}
            label='Data de nascimento'

          />
          {errors.birthdate?.message && (
            <p className='text-red-500'>{errors.birthdate.message}</p>
          )}

          
          <Input
            type="password"
            placeholder="Email" 
            {... register('email')}
            label='Email'
          />
          {errors.email?.message && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}

          <Input
            type="text"
            placeholder="CEP" 
            {... register('zipcode')}
            label='CEP'
          />
          {errors.zipcode?.message && (
            <p className='text-red-500'>{errors.zipcode.message}</p>
          )}

          
          <Input
            type="text"
            placeholder="Contato" 
            {... register('phoneNumber')}
            label='Contato'
          />
          {errors.phoneNumber?.message && (
            <p className='text-red-500'>{errors.phoneNumber.message}</p>
          )}

          
          <Input
            type="text"
            placeholder="Numero" 
            {... register('addressNumber')}
            label='Numero'
          />
          {errors.addressNumber?.message && (
            <p className='text-red-500'>{errors.addressNumber.message}</p>
          )}

          
          <Input
            type="text"
            placeholder="Brasil" 
            {... register('country')}
            label='País'
          />
          {errors.country?.message && (
            <p className='text-red-500'>{errors.country.message}</p>
          )}

        
          <Input
            type="text"
            placeholder="Macapá" 
            {... register('city')}
            label='Cidade'
          />
          {errors.city?.message && (
            <p className='text-red-500'>{errors.city.message}</p>
          )}
          
         
          <Input
            type="text"
            placeholder="Bairro" 
            {... register('addressDistrict')}
            label='Bairro'
          />
          {errors.addressDistrict?.message && (
            <p className='text-red-500'>{errors.addressDistrict.message}</p>
          )}

          
          <Input
            type="text"
            placeholder="Endereço" 
            {... register('addressStreet')}
            label='Endereço'
          />
          {errors.addressStreet?.message && (
            <p className='text-red-500'>{errors.addressStreet.message}</p>
          )}

        
          <Input
            type="text"
            placeholder="Complemento" 
            {... register('addressComplement')}
            label='Complemento'
          />
          {errors.addressComplement?.message && (
            <p className='text-red-500'>{errors.addressComplement.message}</p>
          )}

          <Radiobox/>
        
         
          <Input
            type="password"
            placeholder="********" 
            {... register('password')}
            label='Senha'
          />
          {errors.password?.message && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}

          
          <Input
            type="password"
            placeholder="********" 
            {... register('confirmPassword')}
            label='Confirma Senha'
          />
          {errors.confirmPassword?.message && (
            <p className='text-red-500'>{errors.confirmPassword.message}</p>
          )}

          <ToggleSwitch/>

          <button className="mt-6 bg-indigo-500 text-white font-bold w-full p-3 rounded">cadastra</button>
      </form>

    </main>
      
  )
}
