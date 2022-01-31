import { Ionicons } from '@expo/vector-icons'
import {
    FormControl,
    VStack,
    Text,
    Input,
    Icon,
    HStack,
    Button,
} from 'native-base'
import React from 'react'
import SelectOption from './SelectOption'

const ShowSearch = ({
    options,
    handleOption,
    setPagination,
    selected,
    handleInput,
    searchInput,
    inputInvalid,
    optionInvalid,
    onSubmit,
}) => {
    return (
        <VStack width={'80%'} alignSelf={'center'} my="3">
            <FormControl isRequired isInvalid={inputInvalid}>
                <FormControl.Label>
                    <Text fontSize="sm">Search Movie/TV Show Name</Text>
                </FormControl.Label>
                <Input
                    type="text"
                    placeholder="i.e. James Bond, CSI"
                    InputLeftElement={
                        <Icon
                            size={5}
                            ml={2}
                            color="gray.400"
                            as={<Ionicons name="ios-search" />}
                        />
                    }
                    onChangeText={(value) => {
                        handleInput(value)
                    }}
                    value={searchInput}
                />
                <FormControl.ErrorMessage>
                    Movie/TV show name is required
                </FormControl.ErrorMessage>
            </FormControl>
            <FormControl mt="3" isRequired isInvalid={optionInvalid}>
                <FormControl.Label>
                    <Text fontSize="sm">Choose Search Type</Text>
                </FormControl.Label>
                <HStack justifyContent={'space-between'}>
                    <SelectOption
                        options={options}
                        handleOption={handleOption}
                        selected={selected}
                        w="65%"
                        alignSelf={'center'}
                    />
                    <Button
                        onPress={onSubmit}
                        size={'sm'}
                        startIcon={
                            <Icon as={Ionicons} name="ios-search" size={'sm'} />
                        }
                    >
                        Search
                    </Button>
                </HStack>
                <FormControl.ErrorMessage>
                    Show type is required
                </FormControl.ErrorMessage>
            </FormControl>
        </VStack>
    )
}

export default ShowSearch
