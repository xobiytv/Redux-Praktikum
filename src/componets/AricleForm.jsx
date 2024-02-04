import React from 'react'
import { TextArea, Input } from '../ui'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'

export default function AricleForm(props) {
  const {isLoding} = useSelector(state => state.article)
  const {title, setTitle, description, setDescription, body, setBody, formSubmit} = props
  return (
    <form onSubmit={formSubmit}>
      <Input label={'Title'} state={title} setState={setTitle} />
      <TextArea label={'Description'} state={description} setState={setDescription} />
      <TextArea label={'Body'} state={body} setState={setBody} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isLoding}
      // onClick={loginHandle}
      // disabled={isLoding}
      >
        {isLoding ? 'Loading...' : 'Create'} 
      </Button>
    </form>
  )
}
