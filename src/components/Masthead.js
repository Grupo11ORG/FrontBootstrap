import React from 'react'

 const Masthead = () => {
    return (
        <header class="masthead" id="page-top">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Bienvenido a TechSearch</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">Encuentre a especialistas en Hardware, software y redes en un solo lugar.</p>
                        <a class="btn btn-primary btn-xl" href="#about">Descubra más</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Masthead
