'use client'
import { useFormStatus } from "react-dom";
import Button from "./Button";
import { VARIANT } from "./variant";
import { AiOutlineRight, AiOutlineLoading3Quarters } from "react-icons/ai";
import AnimateSpin from "./AnimateSpin";

export const SubmitButton = ()=>{
    const { pending } = useFormStatus();
    return <Button disabled={pending} variant={VARIANT.PRIMARY}>{pending ? (<>Validation du formulaire <AnimateSpin><AiOutlineLoading3Quarters size={18}/></AnimateSpin></>) : (<>Continuer <AiOutlineRight size={18}/></>)}</Button>
  }