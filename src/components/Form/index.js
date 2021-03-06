import React, {createRef, useEffect, useState} from "react";
import {Input, Divider, Button} from "antd";
import useForm from "../../customHooks/useForm";

export default function Index() {
    const validators = [
        { field : 'email', rules : ['required', 'email'] },
        { field : 'name', rules : ['required'] },
        { field : 'password', rules : ['required'] },
    ];

    const { handleInputChange, state, errors } = useForm(validators);

    return (
        <>
            <pre>
                {
                    JSON.stringify(errors)
                }
            </pre>
            <form style={{ width: '400px' }} >
                <label htmlFor="email">Email</label>
                <Input type="text" name="email" id="email" value={state.email} onChange={handleInputChange} />
                <Divider />
                <label htmlFor="name">Name</label>
                <Input type="text" name="name" id="name" value={state.name} onChange={handleInputChange} />
                <Divider />
                <label htmlFor="password">Password</label>
                <Input type="text" name="password" id="password" value={state.password} onChange={handleInputChange} />
                <Divider />
                <Button>Submit</Button>
            </form>
        </>
    );
}