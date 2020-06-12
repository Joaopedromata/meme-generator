import React, { useState, useEffect } from 'react'

import qs from 'qs'

import { Wrapper, Card, Templates, Form, Button } from './styles'
import logo from '../../Images/logo.svg'

export default function Home() {
   const [ templates, setTemplates ] = useState([])
   const [ selectedTemplate, setSelectedTemplate] = useState(null)
   const [ boxes, setBoxes ] = useState([])
   const [ generatedMeme, setGeneratedMeme ] = useState(null)

   useEffect(() => {
       (async () => {
         const resp = await fetch('https://api.imgflip.com/get_memes')
         const { data: { memes }} = await resp.json()
         setTemplates(memes)
       })()
   }, [])

   const handleInputChange= (index) => (e) => {
       const newValues = boxes
       newValues[index] = e.target.value
       setBoxes(newValues)
   }

   function handleSelectTemplate(template){
       setSelectedTemplate(template)
       setBoxes([])
   }

   async function handleSubmit(e) {
       e.preventDefault()


       const params = qs.stringify({
        template_id: selectedTemplate.id,
        username: 'joaomata182',
        password: 'joaomata182',
        boxes: boxes.map(text => ({ text }))
    })
       
    const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`)
    const { data: { url }} = await resp.json()

    setGeneratedMeme(url)

   }

   return (
    <Wrapper>
       <img src={logo} alt="meme generator" />
        <Card>
            {generatedMeme && (
                <img src={generatedMeme} alt="Generated Meme" />
            )}
            {!generatedMeme && (
                <>
                    <h2>Selecione o template</h2>
                    <Templates>
                        {templates.map((template) => (
                            <button 
                                key={template.id}
                                type="button"
                                onClick={() => handleSelectTemplate(template)}
                                className={template.id === selectedTemplate?.id ? 'selected' : ''}
                            >
                                <img src={template.url} alt={template.name} />
                            </button>
                        ))}
                    </Templates>

                {selectedTemplate && (
                    <>
                        <h2>Textos</h2>
                        <Form onSubmit={handleSubmit}>
                            {(new Array(selectedTemplate.box_count)).fill('').map((_, index) => (
                                <input 
                                    key={String(Math.random())}
                                    placeholder={`Text #${index + 1}`}
                                    onChange={handleInputChange(index)}
                                />
                            ))}
                    
                            <Button type="submit">MakeMyMeme!</Button>
                        </Form>
                    </>
                )}
                </>
            )}

        </Card>
    </Wrapper>

   ) 
}