import { TextField } from '@mui/material'
import React from 'react'

export default function TextArea({ label, state, setState, type = 'text' }) {
    return (
        <div>
            <TextField
                margin="normal"
                required
                fullWidth 
                className='' value={state}
                label={label}
                name="email"
                autoComplete="email"
                autoFocus
                type={type}
                onChange={e => setState(e.target.value)} placeholder={label} id='floatingTextarea2'  />
        </div>
    )
}
