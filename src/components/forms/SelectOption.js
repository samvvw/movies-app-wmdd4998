import React from 'react'
import { Text, Select, Box, VStack, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const SelectOption = ({ options, handleOption, selected }) => {
    return (
        <>
            <VStack alignItems={'center'}>
                <Text>Select Option</Text>
                <Box width={'50%'}>
                    <Select
                        selectedValue={selected}
                        onValueChange={(itemValue) => handleOption(itemValue)}
                        dropdownIcon={
                            <Icon
                                size={4}
                                mr={2}
                                color="gray.400"
                                as={<AntDesign name="caretdown" />}
                            />
                        }
                    >
                        {Object.keys(options).map((o, index) => {
                            return (
                                <Select.Item
                                    label={options[o].label}
                                    value={options[o].value}
                                    key={`${options[o].value}-${index}`}
                                />
                            )
                        })}
                    </Select>
                </Box>
            </VStack>
        </>
    )
}

export default SelectOption
