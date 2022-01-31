import React from 'react'
import { Text, Select, Box, VStack, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const SelectOption = ({
    options,
    handleOption,
    selected,
    alignSelf,
    setPagination,
    w,
    my,
}) => {
    return (
        <>
            <Box w={w} alignSelf={alignSelf} my={my}>
                <Select
                    selectedValue={selected}
                    onValueChange={(itemValue) => {
                        if (setPagination) {
                            setPagination((prev) => ({ ...prev, page: 1 }))
                        }
                        handleOption(itemValue)
                    }}
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
        </>
    )
}

export default SelectOption
