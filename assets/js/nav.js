const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});

$(document).on('ready', function () {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $(".blog").slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
<div class="tab-pane fade show" id="price" role="tabpanel"
aria-labelledby="price-tab">
<div class="row h-100">
    <div class="col-12 px-0 mb-3">
        <div class="cardGroup col-12" role="listbox">
            <div class="card col-4 " role="option" aria-selected="false"
                data-body="bg7" tabindex="0">
                <input type="checkbox" name="carModel" class="carModelCheckbox"
                    id="">
                <div class="mediaContainer">
                    <div>
                        <div class="media">
                            <div
                                class="embedResponsive embed-responsive-16by9 mediaContainer">
                                <div class="thumb-container">
                                    <div class="image embedResponsiveItem"
                                        style="background-image: URL('https://static1.cargurus.com/gfx/reskin/bodystyle/small/suv-crossover.png?io=true&amp;format=jpg&amp;auto=webp')">
                                    </div>
                                    <picture class="embedResponsiveItem">
                                        <img draggable="false"
                                            alt="SUV / Crossover Body Style"
                                            src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/suv-crossover.png?io=true&amp;format=jpg&amp;auto=webp"
                                            data-src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/suv-crossover.png?io=true&amp;format=jpg&amp;auto=webp"
                                            class="w-100">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardBody">
                    <div>
                        <h6 class="title">SUV / Crossover</h6>
                    </div>
                </div>
            </div>
            <div class="card col-4 " role="option" aria-selected="false"
                data-body="bg6" tabindex="0">
                <input type="checkbox" name="carModel" class="carModelCheckbox"
                    id="">
                <div class="mediaContainer">
                    <div>
                        <div class="media">
                            <div
                                class="embedResponsive embed-responsive-16by9 mediaContainer">
                                <div class="thumb-container">
                                    <div class="image embedResponsiveItem"
                                        style="background-image: URL('https://static1.cargurus.com/gfx/reskin/bodystyle/small/sedan.png?io=true&amp;format=jpg&amp;auto=webp')">
                                    </div>
                                    <picture class="embedResponsiveItem">
                                        <img draggable="false"
                                            alt="Sedan Body Style"
                                            src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/sedan.png?io=true&amp;format=jpg&amp;auto=webp"
                                            data-src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/sedan.png?io=true&amp;format=jpg&amp;auto=webp"
                                            class="w-100">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardBody">
                    <div>
                        <h6 class="title">Sedan</h6>
                    </div>
                </div>
            </div>
            <div class="card col-4 " role="option" aria-selected="false"
                data-body="bg5" tabindex="0">
                <input type="checkbox" name="carModel" class="carModelCheckbox"
                    id="">
                <div class="mediaContainer">
                    <div>
                        <div class="media">
                            <div
                                class="embedResponsive embed-responsive-16by9 mediaContainer">
                                <div class="thumb-container">
                                    <div class="image embedResponsiveItem"
                                        style="background-image: URL('https://static1.cargurus.com/gfx/reskin/bodystyle/small/pickup.png?io=true&amp;format=jpg&amp;auto=webp')">
                                    </div>
                                    <picture class="embedResponsiveItem">
                                        <img draggable="false"
                                            alt="Pickup Truck Body Style"
                                            src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/pickup.png?io=true&amp;format=jpg&amp;auto=webp"
                                            data-src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/pickup.png?io=true&amp;format=jpg&amp;auto=webp"
                                            class="w-100">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardBody">
                    <div>
                        <h6 class="title">Pickup Truck</h6>
                    </div>
                </div>
            </div>
            <div class="card col-4 " role="option" aria-selected="false"
                data-body="bg0" tabindex="0">
                <input type="checkbox" name="carModel" class="carModelCheckbox"
                    id="">
                <div class="mediaContainer">
                    <div>
                        <div class="media">
                            <div
                                class="embedResponsive embed-responsive-16by9 mediaContainer">
                                <div class="thumb-container">
                                    <div class="image embedResponsiveItem"
                                        style="background-image: URL('https://static1.cargurus.com/gfx/reskin/bodystyle/small/coupe.png?io=true&amp;format=jpg&amp;auto=webp')">
                                    </div>
                                    <picture class="embedResponsiveItem">
                                        <img draggable="false"
                                            alt="Coupe Body Style"
                                            src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/coupe.png?io=true&amp;format=jpg&amp;auto=webp"
                                            data-src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/coupe.png?io=true&amp;format=jpg&amp;auto=webp"
                                            class="w-100">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardBody">
                    <div>
                        <h6 class="title">Coupe</h6>
                    </div>
                </div>
            </div>
            <div class="card col-4 " role="option" aria-selected="false"
                data-body="bg3" tabindex="0">
                <input type="checkbox" name="carModel" class="carModelCheckbox"
                    id="">
                <div class="mediaContainer">
                    <div>
                        <div class="media">
                            <div
                                class="embedResponsive embed-responsive-16by9 mediaContainer">
                                <div class="thumb-container">
                                    <div class="image embedResponsiveItem"
                                        style="background-image: URL('https://static1.cargurus.com/gfx/reskin/bodystyle/small/hatchback.png?io=true&amp;format=jpg&amp;auto=webp')">
                                    </div>
                                    <picture class="embedResponsiveItem">
                                        <img draggable="false"
                                            alt="Hatchback Body Style"
                                            src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/hatchback.png?io=true&amp;format=jpg&amp;auto=webp"
                                            data-src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/hatchback.png?io=true&amp;format=jpg&amp;auto=webp"
                                            class="w-100">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardBody">
                    <div>
                        <h6 class="title">Hatchback</h6>
                    </div>
                </div>
            </div>
            <div class="card col-4 " role="option" aria-selected="false"
                data-body="bg1" tabindex="0">
                <input type="checkbox" name="carModel" class="carModelCheckbox"
                    id="">
                <div class="mediaContainer">
                    <div>
                        <div class="media">
                            <div
                                class="embedResponsive embed-responsive-16by9 mediaContainer">
                                <div class="thumb-container">
                                    <div class="image embedResponsiveItem"
                                        style="background-image: URL('https://static1.cargurus.com/gfx/reskin/bodystyle/small/convertible.png?io=true&amp;format=jpg&amp;auto=webp')">
                                    </div>
                                    <picture class="embedResponsiveItem">
                                        <img draggable="false"
                                            alt="Convertible Body Style"
                                            src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/convertible.png?io=true&amp;format=jpg&amp;auto=webp"
                                            data-src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/convertible.png?io=true&amp;format=jpg&amp;auto=webp"
                                            class="w-100">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardBody">
                    <div>
                        <h6 class="title">Convertible</h6>
                    </div>
                </div>
            </div>
            <div class="card col-4 " role="option" aria-selected="true"
                data-body="bg9" tabindex="0">
                <input type="checkbox" name="carModel" class="carModelCheckbox">
                <div class="mediaContainer">
                    <div>
                        <div class="media">
                            <div
                                class="embedResponsive embed-responsive-16by9 mediaContainer">
                                <div class="thumb-container">
                                    <div class="image embedResponsiveItem"
                                        style="background-image: URL('https://static1.cargurus.com/gfx/reskin/bodystyle/small/wagon.png?io=true&amp;format=jpg&amp;auto=webp')">
                                    </div>
                                    <picture class="embedResponsiveItem">
                                        <img draggable="false"
                                            alt="Wagon Body Style"
                                            src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/wagon.png?io=true&amp;format=jpg&amp;auto=webp"
                                            data-src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/wagon.png?io=true&amp;format=jpg&amp;auto=webp"
                                            class="w-100">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardBody">
                    <div>
                        <h6 class="title">Wagon</h6>
                    </div>
                </div>
            </div>
            <div class="card col-4 " role="option" aria-selected="false"
                data-body="bg4" tabindex="0">
                <input type="checkbox" name="carModel" class="carModelCheckbox"
                    id="">
                <div class="mediaContainer">
                    <div>
                        <div class="media">
                            <div
                                class="embedResponsive embed-responsive-16by9 mediaContainer">
                                <div class="thumb-container">
                                    <div class="image embedResponsiveItem"
                                        style="background-image: URL('https://static1.cargurus.com/gfx/reskin/bodystyle/small/minivan.png?io=true&amp;format=jpg&amp;auto=webp')">
                                    </div>
                                    <picture class="embedResponsiveItem">
                                        <img draggable="false"
                                            alt="Minivan Body Style"
                                            src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/minivan.png?io=true&amp;format=jpg&amp;auto=webp"
                                            data-src="https://static1.cargurus.com/gfx/reskin/bodystyle/small/minivan.png?io=true&amp;format=jpg&amp;auto=webp"
                                            class="w-100">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardBody">
                    <div>
                        <h6 class="title">Minivan</h6>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <div class="col-md-3 col-sm-4 col-12 d-sm-block d-none">
        <div class="">
            <p class="mb-0 me-2 fs-sm">
                From
            </p>
        </div>
    </div>
    <div class="col-md-3 col-sm-4 col-12 d-sm-block d-none">
        <div class="">
            <p class="mb-0 me-2 fs-sm">
                To
            </p>
        </div>
    </div>
    <div class="col-md-3 col-sm-4 col-12">

    </div>
    <div class="col-md-3 col-sm-4  col-12">
        <div class="h-100 d-flex align-items-center">
            <p class="mb-0 me-2 ">
                Price
            </p>
            <select name="minPrice"
                class="minPriceSelector form-control select-min-price"
                aria-label="Minimum price">
                <option value="0">---</option>
                <option value="1000">$1,000</option>
                <option value="2000">$2,000</option>
                <option value="3000">$3,000</option>
                <option value="4000">$4,000</option>
                <option value="5000">$5,000</option>
                <option value="6000">$6,000</option>
                <option value="7000">$7,000</option>
                <option value="8000">$8,000</option>
                <option value="9000">$9,000</option>
                <option value="10000">$10,000</option>
                <option value="12000">$12,000</option>
                <option value="14000">$14,000</option>
                <option value="16000">$16,000</option>
                <option value="18000">$18,000</option>
                <option value="20000">$20,000</option>
                <option value="22000">$22,000</option>
                <option value="24000">$24,000</option>
                <option value="26000">$26,000</option>
                <option value="28000">$28,000</option>
                <option value="30000">$30,000</option>
                <option value="35000">$35,000</option>
                <option value="40000">$40,000</option>
                <option value="45000">$45,000</option>
                <option value="50000">$50,000</option>
                <option value="55000">$55,000</option>
                <option value="60000">$60,000</option>
                <option value="65000">$65,000</option>
                <option value="70000">$70,000</option>
                <option value="75000">$75,000</option>
                <option value="80000">$80,000</option>
                <option value="85000">$85,000</option>
                <option value="90000">$90,000</option>
                <option value="95000">$95,000</option>
                <option value="100000">$100,000</option>
                <option value="110000">$110,000</option>
                <option value="120000">$120,000</option>
                <option value="130000">$130,000</option>
                <option value="140000">$140,000</option>
                <option value="150000">$150,000</option>
                <option value="160000">$160,000</option>
                <option value="170000">$170,000</option>
                <option value="180000">$180,000</option>
                <option value="190000">$190,000</option>
                <option value="200000">$200,000</option>


            </select>
        </div>

    </div>
    <div class="col-md-3 col-sm-4  col-12">
        <div class="h-100 d-flex align-items-center">
            <select name="minPrice"
                class="minPriceSelector form-control select-min-price"
                aria-label="Minimum price">
                <option value="0">---</option>
                <option value="1000">$1,000</option>
                <option value="2000">$2,000</option>
                <option value="3000">$3,000</option>
                <option value="4000">$4,000</option>
                <option value="5000">$5,000</option>
                <option value="6000">$6,000</option>
                <option value="7000">$7,000</option>
                <option value="8000">$8,000</option>
                <option value="9000">$9,000</option>
                <option value="10000">$10,000</option>
                <option value="12000">$12,000</option>
                <option value="14000">$14,000</option>
                <option value="16000">$16,000</option>
                <option value="18000">$18,000</option>
                <option value="20000">$20,000</option>
                <option value="22000">$22,000</option>
                <option value="24000">$24,000</option>
                <option value="26000">$26,000</option>
                <option value="28000">$28,000</option>
                <option value="30000">$30,000</option>
                <option value="35000">$35,000</option>
                <option value="40000">$40,000</option>
                <option value="45000">$45,000</option>
                <option value="50000">$50,000</option>
                <option value="55000">$55,000</option>
                <option value="60000">$60,000</option>
                <option value="65000">$65,000</option>
                <option value="70000">$70,000</option>
                <option value="75000">$75,000</option>
                <option value="80000">$80,000</option>
                <option value="85000">$85,000</option>
                <option value="90000">$90,000</option>
                <option value="95000">$95,000</option>
                <option value="100000">$100,000</option>
                <option value="110000">$110,000</option>
                <option value="120000">$120,000</option>
                <option value="130000">$130,000</option>
                <option value="140000">$140,000</option>
                <option value="150000">$150,000</option>
                <option value="160000">$160,000</option>
                <option value="170000">$170,000</option>
                <option value="180000">$180,000</option>
                <option value="190000">$190,000</option>
                <option value="200000">$200,000</option>


            </select>
        </div>

    </div>
    <div class="col-md-3 col-sm-4  col-12">
        <div class="h-100 d-flex align-items-center">
            <p class="mb-0 me-2 ">
                Near
            </p>
            <input type="number" class="form-control">
        </div>

    </div>
    <div class="col-md-3 my-md-auto my-3 col-12 d-flex align-items-end">
        <a href="#" class="butn button-dark w-100 text-center">Search</a>
    </div>
</div>
</div>