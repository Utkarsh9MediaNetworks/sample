import React, { Component } from 'react';
import '../../assets/rangeSelector.scss';

class Modal extends React.Component{
    render(){
        return(
            <div id="modal-container">
                <div class="modal-background">
                    <div class="modal">
                    <h2>I'm a Modal</h2>
                    <p>Hear me roar.</p>
                    <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                        <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                    </svg>
                    </div>
                </div>
            </div>
        )
    }

    // $('.button').click(function(){
    //     var buttonId = $(this).attr('id');
    //     $('#modal-container').removeAttr('class').addClass(buttonId);
    //     $('body').addClass('modal-active');
    // })
      
    // $('#modal-container').click(function(){
    //     $(this).addClass('out');
    //     $('body').removeClass('modal-active');
    // });
}

export default Modal