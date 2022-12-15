import React from "react";
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles';

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
  //const formattedMessage = message.replace(/ /g, "%20")
  const CSS_HANDLES = [
    "button__item",
    "button__item--img"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
      <div className={`fixed bottom-2 right-2 flex flexColumn ${handles.button__item}`}>
        <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noreferrer noopener"
        >
            <img
              className={`${handles["button__item--img"]}`}
              src={logo}
              alt="whatsapp's logo"
              width={width}
              height={height}
            />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3004507575",
    message: "Hola, estas comunicado con Easy vamos a chatear...",
    width: 80,
    height: 80
}

WhatsappButton.schema = {
    title: "Boton de WhatsApp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de WhatsApp que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "telefono",
            description: "Agrega por favor el numero de telefono",
            type: "string"
        },
        message: {
            title: "message",
            description: "Agrega por favor el mensaje por defecto",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "width logo",
            type: "number"
        },
        height: {
            title: "width logo",
            type: "number"
        }
    }
}

export default WhatsappButton;
