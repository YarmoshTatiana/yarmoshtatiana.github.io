/*
Проблемы:
1. При выборе ингредиента считает общую цену неккоректно (не всегда) (images/ERROR.png)
2. При изменении ингредиента из одного блока как изменять общую сумму (при нажатии на удалить (крестик)  выборе др. ингредиента все работает)
3. Как оптимизировать код для рассчета общей суммы
*/



$(function () {
    //Объявляем переменные
    var osnova = $(".cheese > p > input");
    var souse = $(".souse > p > input");
    var meatAndFish = $(".meatandfish > p > input");
    var vegetables = $(".vegetables > p > input");
    var listOrders = $(".listorders > ul");
    
    // Создаем объекты для рассчета цен
    var moz = {
        name: "Сыр Моцарелла",
        price: "1.50",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var parm = {
        name: "Сыр Пармезан",
        price: "1.70",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var dorblue = {
        name: "Сыр Дор Блю",
        price: "2",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var tom = {
        name: "Томатный",
        price: "0.40",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var garl = {
        name: "Чесночный",
        price: "0.50",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var franch = {
        name: "Французский",
        price: "0.40",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var firm = {
        name: "Фирменный",
        price: "0.60",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var sliv = {
        name: "Сливочный",
        price: "0.50",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var ham = {
        name: "Ветчина",
        price: "1.40",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var chiken = {
        name: "Курица",
        price: "1.40",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var pork = {
        name: "Свинина",
        price: "1.90",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var bacon = {
        name: "Бекон",
        price: "1.20",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var shrimps = {
        name: "Креветки",
        price: "2",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var salmon = {
        name: "Семга",
        price: "3.50",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var onion = {
        name: "Лук красный",
        price: "0.30",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var pepper = {
        name: "Перец болгарский",
        price: "0.40",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var tomatoes = {
        name: "Помидорки черри",
        price: "0.80",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var cucumbers = {
        name: "Огурчики маринованные",
        price: "0.50",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var olives = {
        name: "Маслины",
        price: "0.60",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var pineapples = {
        name: "Ананасы",
        price: "1.10",
        allPrice: allPrice,
        deletePrice: deletePrice
    }
    var mushrooms = {
        name: "Шампиньоны",
        price: "1",
        allPriceallPrice: allPrice,
        deletePrice: deletePrice
    }

        //Функции для рассчета общей суммы и разности
    function allPrice() {
        var priceStart = +($(".all_price").text());
        var priceIngridients = +(this.price);
        var sumPrice = priceStart + priceIngridients;
        
        return $(".all_price").html(sumPrice);
    }

    function deletePrice() {
        var priceStart = +($(".all_price").text());
        var priceIngridients = +(this.price);
        var minusPrice = priceStart - priceIngridients;
        
        return $(".all_price").text(minusPrice);
    }

        //Формируем заказ
    osnova.click(function () {

        if ($(".insertedcheese").length == 0) {
            listOrders.append($("<li></li>").text($(this).val()).addClass("insertedcheese").append($("<span></span>").addClass("close").click(function () {
                $(this).parent().remove();
                $(".onepizzapiece").remove();
            })));
            $(".pizza").append($("<img>", { 
                src: "images/1.png"
            }).addClass("onepizzapiece"));

            if ($(this).val() == moz.name) {
                moz.allPrice();
            } else if ($(this).val() == parm.name) {
                parm.allPrice();
            } else {
                dorblue.allPrice();
            }
        } else {
            $(".insertedcheese").remove();
            listOrders.append($("<li></li>").text($(this).val()).addClass("insertedcheese").append($("<span></span>").addClass("close").click(function () {
                $(this).parent().remove();
                $(".onepizzapiece").remove()
            })));
            $(".pizza").append($("<img>", {
                src: "images/1.png"
            }).addClass("onepizzapiece"));

            if ($(this).val() == moz.name) {
                moz.allPrice();
            } else if ($(this).val() == parm.name) {
                parm.allPrice();
            } else {
                dorblue.allPrice();
            }
        }
        $(".insertedcheese > .close").click(function () {
            $(".order > button").css("display", "none");
        });
    }).click(btn);


    souse.click(function () {

        if ($(".insertedsouse").length == 0) {
            listOrders.append($("<li></li>").text($(this).val()).addClass("insertedsouse").append($("<span></span>").addClass("close").click(function () {
                $(this).parent().remove();
                $(".twopizzapiece").remove();
            })));
            $(".pizza").append($("<img>", {
                src: "images/2.png"
            }).addClass("twopizzapiece"));

            if ($(this).val() == tom.name) {
                tom.allPrice();
            } else if ($(this).val() == garl.name) {
                garl.allPrice();
            } else if ($(this).val() == franch.name) {
                franch.allPrice();
            } else if ($(this).val() == firm.name) {
                firm.allPrice();
            } else if ($(this).val() == sliv.name) {
                sliv.allPrice();
            }
        } else {
            $(".insertedsouse").remove();
            listOrders.append($("<li></li>").text($(this).val()).addClass("insertedsouse").append($("<span></span>").addClass("close").click(function () {
                $(this).parent().remove();
                $(".twopizzapiece").remove();
            })));
            $(".pizza").append($("<img>", {
                src: "images/2.png"
            }).addClass("twopizzapiece"));

            if ($(this).val() == tom.name) {
                tom.allPrice();
            } else if ($(this).val() == garl.name) {
                garl.allPrice();
            } else if ($(this).val() == franch.name) {
                franch.allPrice();
            } else if ($(this).val() == firm.name) {
                firm.allPrice();
            } else if ($(this).val() == sliv.name) {
                sliv.allPrice();
            }
        }
        $(".insertedsouse > .close").click(function () {
            $(".order > button").css("display", "none");
        });
    }).click(btn);

    meatAndFish.click(function () {

        if ($(".insertedmeatandfish").length == 0) {
            listOrders.append($("<li></li>").text($(this).val()).addClass("insertedmeatandfish").append($("<span></span>").addClass("close").click(function () {
                $(this).parent().remove();
                $(".threepizzapiece").remove();
            })));
            $(".pizza").append($("<img>", {
                src: "images/3.png"
            }).addClass("threepizzapiece"));

            if ($(this).val() == ham.name) {
                ham.allPrice();
            } else if ($(this).val() == chiken.name) {
                chiken.allPrice();
            } else if ($(this).val() == pork.name) {
                pork.allPrice();
            } else if ($(this).val() == bacon.name) {
                bacon.allPrice();
            } else if ($(this).val() == shrimps.name) {
                shrimps.allPrice();
            } else if ($(this).val() == salmon.name) {
                salmon.allPrice();
            }
        } else {
            $(".insertedmeatandfish").remove();
            listOrders.append($("<li></li>").text($(this).val()).addClass("insertedmeatandfish").append($("<span></span>").addClass("close").click(function () {
                $(this).parent().remove();
                $(".threepizzapiece").remove();
            })));
            $(".pizza").append($("<img>", {
                src: "images/3.png"
            }).addClass("threepizzapiece"));

            if ($(this).val() == ham.name) {
                ham.allPrice();
            } else if ($(this).val() == chiken.name) {
                chiken.allPrice();
            } else if ($(this).val() == pork.name) {
                pork.allPrice();
            } else if ($(this).val() == bacon.name) {
                bacon.allPrice();
            } else if ($(this).val() == shrimps.name) {
                shrimps.allPrice();
            } else if ($(this).val() == salmon.name) {
                salmon.allPrice();
            }
        }
        $(".insertedmeatandfish > .close").click(function () {
            $(".order > button").css("display", "none");
        });
    }).click(btn);

    vegetables.click(function () {

        if ($(".insertedvegetables").length == 0) {
            listOrders.append($("<li></li>").text($(this).val()).addClass("insertedvegetables").append($("<span></span>").addClass("close").click(function () {
                $(this).parent().remove();
                $(".fourpizzapiece").remove();
            })));
            $(".pizza").append($("<img>", {
                src: "images/4.png"
            }).addClass("fourpizzapiece"));

            if ($(this).val() == onion.name) {
                onion.allPrice();
            } else if ($(this).val() == pepper.name) {
                pepper.allPrice();
            } else if ($(this).val() == tomatoes.name) {
                tomatoes.allPrice();
            } else if ($(this).val() == cucumbers.name) {
                cucumbers.allPrice();
            } else if ($(this).val() == olives.name) {
                olives.allPrice();
            } else if ($(this).val() == pineapples.name) {
                pineapples.allPrice();
            } else if ($(this).val() == mushrooms.name) {
                mushrooms.allPrice();
            }
        } else {
            $(".insertedvegetables").remove();
            listOrders.append($("<li></li>").text($(this).val()).addClass("insertedvegetables").append($("<span></span>").addClass("close").click(function () {
                $(this).parent().remove();
                $(".fourpizzapiece").remove();
            })));
            $(".pizza").append($("<img>", {
                src: "images/4.png"
            }).addClass("fourpizzapiece"));

            if ($(this).val() == onion.name) {
                onion.allPrice();
            } else if ($(this).val() == pepper.name) {
                pepper.allPrice();
            } else if ($(this).val() == tomatoes.name) {
                tomatoes.allPrice();
            } else if ($(this).val() == cucumbers.name) {
                cucumbers.allPrice();
            } else if ($(this).val() == olives.name) {
                olives.allPrice();
            } else if ($(this).val() == pineapples.name) {
                pineapples.allPrice();
            } else if ($(this).val() == mushrooms.name) {
                mushrooms.allPrice();
            }
        }
        $(".insertedvegetables > .close").click(function () {
            $(".order > button").css("display", "none");
        });
    }).click(btn);

    // Удаляем цену при нажатии на закрыть
    $("#moz").click(function () {
        $(".insertedcheese > .close").click(function () {
            moz.deletePrice();
        });
    });

    $("#parm").click(function () {
        $(".insertedcheese > .close").click(function () {
            parm.deletePrice();
        });
    });

    $("#dorblue").click(function () {
        $(".insertedcheese > .close").click(function () {
            dorblue.deletePrice();
        });
    });

    $("#tom").click(function () {
        $(".insertedsouse > .close").click(function () {
            tom.deletePrice();
        });
    });

    $("#garl").click(function () {
        $(".insertedsouse > .close").click(function () {
            garl.deletePrice();
        });
    });

    $("#franch").click(function () {
        $(".insertedsouse > .close").click(function () {
            franch.deletePrice();
        });
    });

    $("#firm").click(function () {
        $(".insertedsouse > .close").click(function () {
            firm.deletePrice();
        });
    });

    $("#sliv").click(function () {
        $(".insertedsouse > .close").click(function () {
            sliv.deletePrice();
        });
    });

    $("#ham").click(function () {
        $(".insertedmeatandfish > .close").click(function () {
            ham.deletePrice();
        });
    });

    $("#chiken").click(function () {
        $(".insertedmeatandfish > .close").click(function () {
            chiken.deletePrice();
        });
    });

    $("#pork").click(function () {
        $(".insertedmeatandfish > .close").click(function () {
            pork.deletePrice();
        });
    });

    $("#bacon").click(function () {
        $(".insertedmeatandfish > .close").click(function () {
            bacon.deletePrice();
        });
    });

    $("#shrimps").click(function () {
        $(".insertedmeatandfish > .close").click(function () {
            shrimps.deletePrice();
        });
    });

    $("#salmon").click(function () {
        $(".insertedmeatandfish > .close").click(function () {
            salmon.deletePrice();
        });
    });

    $("#onion").click(function () {
        $(".insertedvegetables > .close").click(function () {
            onion.deletePrice();
        });
    });

    $("#pepper").click(function () {
        $(".insertedvegetables > .close").click(function () {
            pepper.deletePrice();
        });
    });

    $("#tomatoes").click(function () {
        $(".insertedvegetables > .close").click(function () {
            tomatoes.deletePrice();
        });
    });

    $("#cucumbers").click(function () {
        $(".insertedvegetables > .close").click(function () {
            cucumbers.deletePrice();
        });
    });

    $("#olives").click(function () {
        $(".insertedvegetables > .close").click(function () {
            olives.deletePrice();
        });
    });

    $("#pineapples").click(function () {
        $(".insertedvegetables > .close").click(function () {
            pineapples.deletePrice();
        });
    });

    $("#mushrooms").click(function () {
        $(".insertedvegetables > .close").click(function () {
            mushrooms.deletePrice();
        });
    });

    //Делаем кнопку "Заказать" видимой
    function btn() {
        var pizza = $(".pizza > img");
        if (pizza.hasClass("onepizzapiece") && pizza.hasClass("twopizzapiece") && pizza.hasClass("threepizzapiece") && pizza.hasClass("fourpizzapiece")) {
            $(".order > button").css("display", "block");
        }
    }

});



document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    });
});

function сomplete() {
    alert ('Ваш заказ принят!');
}

