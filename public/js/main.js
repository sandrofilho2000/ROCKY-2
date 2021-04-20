

$(function(){
    let check = document.querySelector('#check')
    let sp1 = 1
    let sp2 = 1
    let span1 = false
    let span2 = false
    let target = document.querySelectorAll('[data-anime]')

    
    //Função para ativar ou desativar o menu MOBILE

    //#1 Uma label toggle menu acionará um input check invisível quando clicada.

    //#2 Caso o input check seja verdadeiro, o menu irá aparecer da direita.

    //#3 Se for falso, ele será recolhido e o resto da aplicação estará visível.

        $('label').click(function(){
        if(check.checked==true){
            $(".mobile-menu-items").css('right', '0')
            $("li a span").html("▼")
            $('upper_nav').css("display", "none")
        }
        else if(check.checked==false){
            $(".mobile-menu-items").css('right', '-100%')
            $("li a span").html("▲")
            $('upper_nav').css("display", "block")
        }
        })




    //Função para ativar/desativar o submenu responsivo

    //#1 Um par de funções foi criado para controlar os submenus, uma função para cada menu.

    //#2 Quando o elemento "li span" for clicado, a variável int será incrementada.

    //#3 Está variável poderá ser positiva ou negativa.

    //#4 Quando negativa, é atribuida a classe "up" ao submenu, tornando-o invisível.

    //#5 Quando positiva, a classe "up" é substituída pela classe "down", fazendo com que o submenu fique visível


        $("li span").eq(0).click(function(){
            
            if(sp1%2==0){
                $(this).html("▼")
                submenu = $(this).siblings('.mobile-menu-items ul.submenu-ul')
                submenu[0].setAttribute('class', 'submenu-ul up')
                span1 = false
            }
            else if(sp1%2==1){
                $(this).html("▲")
                submenu = $(this).siblings('.mobile-menu-items ul.submenu-ul')
                submenu[0].setAttribute('class', 'submenu-ul down')
                span1 = true
            }
            sp1++; 
            
        })

        $("li span").eq(1).click(function(){
            if(sp2%2==0){
                $(this).html("▼")
                submenu = $(this).siblings('.mobile-menu-items ul.submenu-ul')
                submenu[0].setAttribute('class', 'submenu-ul up')
                span2 = false
            }

            else if(sp2%2==1){
                $(this).html("▲")
                submenu = $(this).siblings('.mobile-menu-items ul.submenu-ul')
                submenu[0].setAttribute('class', 'submenu-ul down')
                span2 = true
            }
            sp2++;  
        })





    //A função animate é responsavel por tornar a navigation bar dinâmica quando rolarmos o site

    //#1 Se for mobile, a função esconderá o elemento "upper_nav" na parte superior do site, elemento este com um link para contato

    //#2 A função detecta quando a página está na sua rolagem superior máxima, se for o caso, nada acontecerá

    //#3 Ao rolar para baixo, a função detectará e adicionará à nav bar a classe "special-menu" que alterará seu CSS

    //#4 Será adicionado ao menu a classe "animation" que alterará seu CSS

    //#5 Quando voltarmos para o topo, estas classes serão removidas de seus elementos e estes voltarão ao seu estado inicial

        function animate(){
            const pageTop = window.pageYOffset
            
       

            if(window.innerWidth <= 949){
                $('.upper_nav').css('display', 'block').css('opacity', '1')
                
            }else{
                $('.upper_nav').css('display', 'none').css('opacity', '1')
                $('nav').css('top', '0px')
            }

            
            
            if(pageTop < document.querySelector("#footer").offsetTop){
                $('.desktop-menu-items ul li.special_li').addClass('animation')
                $('.desktop-menu-items ul li.special_li a').addClass('animation')
                $('nav').addClass('special-menu').css('opacity', '1')
                $('.logo').css('backgroundImage', 'url("Imagens_teste-master/web/logo_black.png")')
                $('.line').css('background', 'black')
                if(window.innerWidth <= 949 && check.checked==true){
                    $('.upper_nav').css('top', '0px').css('display', 'block')
                    $('nav').css('top', '40px').css('opacity', '1')
                }
                
            }
            if(pageTop >= document.querySelector("#footer").offsetTop){
                $('nav').css('opacity', '0')
                $('.upper_nav').css('opacity', '0')
            }
            else if(pageTop == 0){
                $('.desktop-menu-items ul li.special_li').removeClass('animation')
                $('.desktop-menu-items ul li.special_li a').removeClass('animation')
                $('nav').removeClass('special-menu')
                $('.logo').css('backgroundImage', 'url("Imagens_teste-master/web/logo.png")')
                $('.line').css('background', 'white')
                if(window.innerWidth <= 949){
                    $('.upper_nav').css('top', '-40px').css('display', 'block')
                    $('nav').css('top', '0px')
                    
                }
                
            }
        }
        setInterval(() => {
            $('.banner-section').addClass('animate')
        }, 350);
    


    

    //A função animate2 tornará os elementos do site dinâmicos ao scroll

    //#1 Ela detecta a atual altura da página 

    //#2 Aos elementos afetados, foi adicionado o atributo "[data-anime]"

    //#3 A função detecta a altura destes elementos em relação ao site
    
    //#4 Quando a rolagem os alcançar, lhes serão atribuídos a classe "animate" que os tornarão visíveis

        function animate2(){
            const windowTop = window.pageYOffset - 350
            target.forEach(element => {
                if((windowTop) > element.offsetTop){
                    element.classList.add('animate')
                }
            });
        }
        window.addEventListener('scroll', function(){
            animate()
            if(target.length){
                animate2()
            }
            
        })

    

    function scrollTo(element){
        document.querySelector(element).scrollIntoView({behavior: 'smooth'})
    }

    //Par de funções que redirecionam o usuário para o footer
        $(".scroll").click(function(e){
            e.preventDefault();
            scrollTo('footer')
        })
        $(".scroll2").click(function(e){
            e.preventDefault();
            scrollTo('footer')
        })
})