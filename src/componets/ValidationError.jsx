import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import Alert from '@mui/material/Alert';

const ValidationError = () => {
    const { error } = useSelector(state => state.auth)

    const errorMassage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name].join(', ')
            return `${name} - ${msg}`
        })
    }, [error])

    return (
        error !== null &&
        errorMassage().map(error => (
            <div className='flex flex-col gap-2 items-start w-full '>
                <Alert className='mb-2' variant="outlined" key={error} severity="error">{error} </Alert>

            </div>
        ))
    )
}

export default ValidationError