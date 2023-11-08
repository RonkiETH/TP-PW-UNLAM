document.addEventListener('DOMContentLoaded', () => {
    // Obtengo el ID de la URL
    let urlParams = new URLSearchParams(window.location.search);
    let selectedPlan = urlParams.get('plan');

    let planContainer = document.getElementById('plan-container');

    switch (selectedPlan) {
        case 'plan-mensual':
            planContainer.innerHTML = `
                <article class="premium-card">
                    <h2 class="premium-card-title" id="plan-premium">
                        Plan mensual
                    </h2>
                    <ul class="premium-card-itemList">
                        <li class="premium-card-itemList__item">
                            Música sin anuncios
                        </li>
                        <li class="premium-card-itemList__item">
                            Escuchá tus canciones en cualquier lugar, incluso
                            sin conexión
                        </li>
                        <li class="premium-card-itemList__item">
                            Reproducción on-demand
                        </li>
                        <li class="premium-card-itemList__item">
                            Prepagá o suscribite
                        </li>
                    </ul>
                    <div>
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                    </div>
                    <h3 class="premium-card-price">$ 4.99 / Mes</h3>
                </article>
            `;
            break;
    
        case 'plan-anual':
            planContainer.innerHTML = `
                <article class="premium-card premium-card__anual">
                    <div class="premium-card-heading-container">
                        <h2 class="premium-card-title" id="plan-premium">
                            Plan anual
                        </h2>
                        <span class="premium-card-span">El más elegido</span>
                    </div>
                    <ul class="premium-card-itemList">
                        <li class="premium-card-itemList__item">
                            Todos los beneficios del Plan mensual
                        </li>
                        <li class="premium-card-itemList__item">
                            Descuento especial
                        </li>
                        <li class="premium-card-itemList__item">
                            Primer mes gratuito
                        </li>
                    </ul>
                    <div class="premium-card-img-container">
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                    </div>
                    <h3 class="premium-card-price">$ 44.99 / Mes</h3>
                    <span class="premium-card-discount">25% de Descuento</span>
                </article>
            `;
            break;
        
        case 'plan-infinito':
            planContainer.innerHTML = `
                <article class="premium-card">
                    <h2 class="premium-card-title" id="plan-premium">
                        Plan infinito
                    </h2>
                    <ul class="premium-card-itemList">
                        <li class="premium-card-itemList__item">
                            Experiencia Spotilam ilimitada
                        </li>
                        <li class="premium-card-itemList__item">
                            Pago único y acceso de por vida
                        </li>
                        <li class="premium-card-itemList__item">
                            Música sin anuncios
                        </li>
                    </ul>
                    <article class="premium-card-img-container__infinito">
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                        <img
                            class="premium-card-img"
                            src="../img/star-filled.png"
                            alt="star"
                            width="20px"
                        />
                    </article>
                    <h3 class="premium-card-price">$ 2999.99 / Mes</h3>
                </article>
            `;
            break;
        default:
            break;
    }
});