"use client"

import {Fragment, useState} from 'react'
import { useRouter } from 'next/navigation'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import Image from 'next/image'
import { updateSearchParams } from '@/utils'


const CustomFilter = ({title, options}:CustomFilterProps) => {

const [selected, setSelected] = useState(options[0]);
const router = useRouter();


const handleUpdateParams = (type: string, value:string) => {
  const newPathName = updateSearchParams(type,value);

  router.push(newPathName);
}

  return (
    <div className='w-fit'>
      <Listbox 
         value={selected} 
         onChange={(e)=> setSelected(e)}>
       <div className='relative w-fit z-10'>
        <ListboxButton className="custom-filter__btn">
          <span className='block truncate'>
             {selected.title}
          </span>
          <Image
            src="/chevron-up-down.svg"
            width={20}
            height={20}
            alt='chevron-up-down'
            className='ml-4 object-contain'
            />
        </ListboxButton>
        <Transition
         as={Fragment}
         leave='transition ease-in duration-100'
         leaveFrom='opacity-100'
         leaveTo='opacity-0' 
         >
        <ListboxOptions
         className='custom-filter__options'>
         {options.map((option)=>(
           <ListboxOption 
           key={option.title}
           value={option}
           className={({active})=>`relative cursor-default select-none px-2 py-4 ${active ? 'bg-primary-blue text-white': 'text-grey-900'}`}
           >
            {({selected})=>(
              <span className={`block truncate ${selected ? 'font-medium': 'font-normal'}`}>
              {option.title}
              </span>
              )
            }
          </ListboxOption>
         ))}
        </ListboxOptions>
         </Transition>
         </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
