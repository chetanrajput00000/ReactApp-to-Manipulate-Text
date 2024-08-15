import React from 'react'

export default function Alert(props) {
    return (
        <div>

            <div class={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
                <strong>{props.alert.type}</strong>  {props.alert.message}

            </div>
        </div>
    )
}
