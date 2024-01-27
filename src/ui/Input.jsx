import { TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Input({label, state, setState, type = 'text'}) {
    // const [value, setValue] = useState(state)
    return (
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={label}
            name="email"
            autoComplete="email"
            autoFocus
            type={type}
            value={state}
            onChange={e => setState(e.target.value)}
        />
    )
}
