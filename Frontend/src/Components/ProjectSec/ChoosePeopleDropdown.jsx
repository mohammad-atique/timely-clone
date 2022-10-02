import React from 'react'
import {Popover,PopoverTrigger,PopoverContent,PopoverBody,PopoverArrow,PopoverCloseButton, Button, Portal, Input,} from '@chakra-ui/react'

const ChoosePeopleDropdown = () => {
  return (

            <Popover>
            <PopoverTrigger>
            <Button bgColor={"white"} size="sm">Choose people to add</Button>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                 <Input placeholder='search users'/>
                </PopoverBody>
            </PopoverContent>
            </Portal>
        </Popover>

  )
}

export default ChoosePeopleDropdown