'use client'

import React, { useState } from 'react'
import { Dropdown } from '../icons/'
import { Frames } from '@/app/dataType'
import RoundEdge from '../structures/RoundEdge'
import cn from '@/app/utils/cn'
import ArtDecoContainer from './ArtDecoContainer'
import useHover from '@/app/hooks/useHover'

interface Props extends Frames {
  subArr?: Array<string>
}

export default function GameplayBox({ width, title, subtitle, subArr }: Props) {
  const [isActive, setActive] = useState<boolean>(false)
  const { hovered, nodeRef } = useHover<HTMLDivElement>()

  // handle
  const handleChange = () => setActive(!isActive)

  return (
    <div className='game-play-box-content' ref={nodeRef}>
      <ArtDecoContainer
        className='!w-full'
        width={width}
        subArr={subArr}
        isActive={isActive}
      >
        <div
          className={cn(
            'group flex cursor-pointer flex-col justify-center bg-no-repeat px-5 py-2 xl:px-12'
          )}
        >
          <div className='flex items-center justify-between'>
            <div className='titleFont sm:lg font-normal group-hover:text-white md:text-xl'>
              {title}
            </div>
            <div className='game-play-box-button flexCenter relative flex-shrink-0 duration-300'>
              {hovered && <div className='game-play-bg-blur absolute'></div>}
              <RoundEdge onClick={handleChange} isActive={isActive}>
                <Dropdown />
              </RoundEdge>
            </div>
          </div>

          {isActive && (
            <div className='game-play-box-text mb-5 w-full font-gothic text-white'>
              {!subArr ? (
                subtitle
              ) : (
                <ul className='ml-6'>
                  {subArr?.map((item, index) => {
                    return (
                      <li key={index} className='list-disc capitalize'>
                        {item}
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )}
        </div>
      </ArtDecoContainer>
    </div>
  )
}
