'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { useCallback, useEffect } from 'react';
import axios from 'axios';
import ToggleSwitch from './Components/toggle';
import { Input } from './Components/Input';
import Radiobox from './Components/RadioBox';
import { zipCodeMask } from './Mask/Mask';


const schema = z.object({
  address: z.object({
   
    zipcode:z.string().min(8, 'Digite um cep valido'),
    addressNumber:z.string().max(40, 'adicione um numero valido'),
    addressState:z.string().max(2, 'Insira o numero valido'),
    country:z.string().min(6,'insira um pais valido'),
    city:z.string().min(9,'insira uma cidade valido'),
    addressDistrict:z.string().min(9,'insira um bairro valido'),
    addressStreet:z.string().min(9, 'Insira um endreço valido'),
    addressComplement:z.string(),
    
   
  }),

  datafields: z.object({

    fullname: z.string().min(1, 'O nome invalido ').max(100, 'O nome de ter no max 100 caracteres'),
    documentNumber:z.string().min(11, 'Cpf invalido' ),
    email:z.string().min(9, 'Email Invalido'),
    birthdate:z.string().min(9, 'Data de nascimento invalida'),
    phoneNumber:z.string().min(11, 'Digite um numero valido'),

    password: z.string().min(10, 'A senha de ter no minimo 10 caracteres').regex(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'),
    confirmPassword: z.string()
  })
}).refine((fields) => fields.datafields.password === fields.datafields.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas precisam ser iguais'
}).transform((field) => ({
  address:{
    zipcode: field.address.zipcode,
    addressDistrict: field.address.addressDistrict,
    addressState: field.address.addressState,
    addressNumber: field.address.addressNumber,
    city: field.address.city,
    country: field.address.country,
    addressStreet: field.address.addressStreet,
    addressComplement: field.address.addressComplement,
  }
}))

type FormProps = z.infer<typeof schema>;




export default function Form() {

  const {register, handleSubmit, watch, setValue,
    formState: {errors} } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues:{
      address: {
        zipcode: '',
        city: '',
        addressNumber: '',
        addressComplement: '',
        addressDistrict: '',
        addressStreet: '',
        addressState: '',
        
      }
    }
  });

  
  const zipcode = watch('address.zipcode')

  const handleForm = (data: FormProps) => {
    console.log(data)
  };
  

  const handleFetchAddress = useCallback(async(zipcode: string) =>{
    const {data} = await axios.get(
      `https://viacep.com.br/ws/${zipcode}/json/ `)

    console.log(data)
  }, [])

  useEffect(() => {
    setValue('address.zipcode', zipCodeMask(zipcode))

    if (zipcode.length !== 9 ) return;
   handleFetchAddress(zipcode)
 }, [handleFetchAddress, setValue, zipcode])




  return (
    <main className="bg-slate-50 max-w-4xl mx-auto p-24">
      <form onSubmit={handleSubmit(handleForm)}>
          

        {/*   <Input
            type="text"
            placeholder="José Aldo" 
            {... register('datafields.fullname')}
            label='Nome completo'
          />
          {errors.datafields?.fullname?.message && (
            <p className='text-red-500'>{errors.datafields.fullname.message}</p>
          )} */}

          
        {/*   <Input
            type="text"
            placeholder="111.333.444-22" 
            {... register('datafields.documentNumber')}
            label='CPF'
          />
          {errors.datafields?.documentNumber?.message && (
            <p className='text-red-500'>{errors.datafields?.documentNumber?.message}</p>
          )} */}

         
        {/*   <Input
            type="text"
            placeholder="10/10/1001" 
            {... register('datafields.birthdate')}
            label='Data de nascimento'

          />
          {errors.datafields?.birthdate?.message && (
            <p className='text-red-500'>{errors.datafields?.birthdate?.message}</p>
          )} */}

     {/*      
          <Input
            type="password"
            placeholder="Email" 
            {... register('datafields.email')}
            label='Email'
          />
          {errors.datafields?.email?.message && (
            <p className='text-red-500'>{errors.datafields?.email?.message}</p>
          )} */}

          <Input
            type="text"
            placeholder="CEP" 
            {... register('address.zipcode')}
            label='CEP'
          />
          {errors.address?.zipcode?.message && (
            <p className='text-red-500'>{errors.address?.zipcode?.message}</p>
          )}

          
       {/*    <Input
            type="text"
            placeholder="Contato" 
            {... register('datafields.phoneNumber')}
            label='Contato'
          />
          {errors.datafields?.phoneNumber?.message && (
            <p className='text-red-500'>{errors.datafields?.phoneNumber?.message}</p>
          )} */}

          
          <Input
            type="text"
            placeholder="Numero" 
            {... register('address.addressNumber')}
            label='Numero'
          />
          {errors.address?.addressNumber?.message && (
            <p className='text-red-500'>{errors.address?.addressNumber?.message}</p>
          )}

          
          <Input
            type="text"
            placeholder="Brasil" 
            {... register('address.country')}
            label='País'
          />
          {errors.address?.country?.message && (
            <p className='text-red-500'>{errors.address?.country?.message}</p>
          )}

        
          <Input
            type="text"
            placeholder="Macapá" 
            {... register('address.city')}
            label='Cidade'
          />
          {errors.address?.city?.message && (
            <p className='text-red-500'>{errors.address?.city?.message}</p>
          )}
          
         
          <Input
            type="text"
            placeholder="Bairro" 
            {... register('address.addressDistrict')}
            label='Bairro'
          />
          {errors.address?.addressDistrict?.message && (
            <p className='text-red-500'>{errors.address?.addressDistrict?.message}</p>
          )}

          
          <Input
            type="text"
            placeholder="Endereço" 
            {... register('address.addressStreet')}
            label='Endereço'
          />
          {errors.address?.addressStreet?.message && (
            <p className='text-red-500'>{errors.address?.addressStreet?.message}</p>
          )}

        
          <Input
            type="text"
            placeholder="Complemento" 
            {... register('address.addressComplement')}
            label='Complemento'
          />
          {errors.address?.addressComplement?.message && (
            <p className='text-red-500'>{errors.address?.addressComplement?.message}</p>
          )}

          <Radiobox/>
        
        {/*  
          <Input
            type="password"
            placeholder="********" 
            {... register('datafields.password')}
            label='Senha'
          />
          {errors.datafields?.password?.message && (
            <p className='text-red-500'>{errors.datafields?.password?.message}</p>
          )}
 */}
          
       {/*    <Input
            type="password"
            placeholder="********" 
            {... register('datafields.confirmPassword')}
            label='Confirma Senha'
          />
          {errors.datafields?.confirmPassword?.message && (
            <p className='text-red-500'>{errors.datafields?.confirmPassword?.message}</p>
          )} */}

          <ToggleSwitch/>

          <button className="mt-6 bg-indigo-500 text-white font-bold w-full p-3 rounded">cadastra</button>
      </form>

    </main>
      
  )
}
