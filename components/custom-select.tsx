import * as React from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface CustomSelectProps {
    placeholder: string;
    label: string;
    options: any[];
}

export function CustomSelect(props: CustomSelectProps) {
    const { label, options, placeholder } = props;
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options.map(option => {
                        return (
                            <SelectItem key={option.name} value={option.name}>
                                {option.name}
                            </SelectItem>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
