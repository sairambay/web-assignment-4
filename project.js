function add(){
    var x=document.getElementById('inputc').value;
    x++;
    if(x>=0&&x<=99)
        document.getElementById('inputc').value= x;
}

function EN(pageName) {
    document.getElementById("mainHeaderText").innerText = "Main";
    document.getElementById("storeHeaderText").innerText = "Store";
    document.getElementById("licenseHeaderText").innerText = "Licenses";
    document.getElementById("inputSearchProduct").placeholder = "Search product";
    document.getElementById("searchButton").innerText = "Search";
    if (pageName === 'product-info') {
        document.getElementById("articul").innerText = "Articul: 364215376135191"
        document.getElementById("product-info-short-definition").innerText = "Experience a new visual experience with the HUAWEI MateBook D 15. The 15.6-inch HUAWEI FullView1 IPS 15.6-inch borderless IPS screen and 16:9 aspect ratio expand your visual boundaries, while the high resolution of Full HD 1920 x 1080 pixels makes every image detailed and clear. Push the boundaries of what's possible.2";
        document.getElementById("product-info-definition").innerText = "The HUAWEI MateBook D 15 is an amazingly portable device with a unique design with a body thickness of only 16.9 mm and a weight of 1.53 kg. Despite its low weight and thickness, the stylish, sleek body of the notebook is very durable and resistant to wear and tear.";
        document.getElementById("product-info-return-money").innerText = "These are the terms and conditions for the return of goods and money. Tell visitors what to do if they want to return an item and get their money back. A clear and concise return policy is a good way to build trust with customers.";
        document.getElementById("product-info-delivery").innerText = "This is information about the delivery of orders. Tell us what shipping methods you offer, how you pack orders and how much it costs. Detailed delivery information builds customer confidence and helps them make a decision to buy from you.";
        document.getElementById("product-info-definition-header").innerText = "About product";
        document.getElementById("product-info-return-money-header").innerText = "RETURN OF GOODS AND MONEY";
        document.getElementById("product-info-delivery-header").innerText = "DELIVERY";
        document.getElementById("inputc").placeholder = "Count";
        document.getElementById("product-info-count").innerText = "Count";
        document.getElementById("product-info-button-to-cart").innerText = "Add to cart"
    }
    if (pageName === 'index') {
        document.getElementById("slogan").innerText = "Shopping - in\n" +
            "«WEB PORTAL»"
        document.getElementById("index-our-history-header").innerText = "«WEB-PORTAL»: our history";
        document.getElementById("index-our-history-text-1").innerText = "The best source of exclusive goods";
        document.getElementById("index-our-history-text-2").innerText = "If you need to repair equipment or purchase a new one, \"WEB PORTAL\" will cope with any of your requests.";
        document.getElementById("index-our-history-text-3").innerText = "\"WEB PORTAL\" has been the leading electronic equipment store in Nursultan since 2008. We offer Computers, Mobile Phones, Notebooks and related products, as well as form kits and select accessories according to the characteristics specified by the client. \"WEB PORTAL\" is a pleasant shopping experience. We will help you choose the right product, deliver it quickly and free of charge and provide professional support.";
        document.getElementById("index-our-products-header").innerText = "Our products";
        var productNameElements = document.getElementsByClassName('product-name');
        for(var i = 0; i < productNameElements.length; i++){
            productNameElements[i].innerText = "Dell XPS 13";
        }
        var productDescriptionElements = document.getElementsByClassName('product-description');
        for(var i = 0; i < productDescriptionElements.length; i++){
            productDescriptionElements[i].innerText = "Operating system · Central processing unit ; Microsoft Windows 7 Home Premium · Intel Core i5.";
        }
        var readMoreElements = document.getElementsByClassName('product-read-more');
        for(var i = 0; i < readMoreElements.length; i++){
            readMoreElements[i].innerText = "Read more";
        }
    }
}

function RU(pageName) {
    document.getElementById("mainHeaderText").innerText = "Главная";
    document.getElementById("storeHeaderText").innerText = "Магазин";
    document.getElementById("licenseHeaderText").innerText = "Лицензии";
    document.getElementById("inputSearchProduct").placeholder = "Поиск товара";
    document.getElementById("searchButton").innerText = "Поиск";
    if (pageName === 'product-info') {
        document.getElementById("articul").innerText = "Артикул: 364215376135191"
        document.getElementById("product-info-short-definition").innerText = "Испытайте новый визуальный опыт с HUAWEI MateBook D 15. Безрамочный IPS-экран HUAWEI FullView1 15,6 дюйма и соотношение сторон 16:9 расширяют ваши визуальные границы, а высокое разрешение Full HD 1920 x 1080 пикселей делает каждое изображение детальным и четким. Расширяйте границы возможного.2";
        document.getElementById("product-info-definition").innerText = "HUAWEI MateBook D 15 — удивительно портативное устройство с уникальным дизайном с толщиной корпуса всего 16,9 мм и весом 1,53 кг. Несмотря на небольшой вес и толщину стильный гладкий корпус ноутбука очень прочный и устойчивый к износу.";
        document.getElementById("product-info-return-money").innerText = "Это правила и условия возврата товара и денег. Расскажите посетителям, что нужно сделать, если они захотят вернуть товар и получить назад свои деньги. Четкая и ясная политика возврата — это хороший способ построить доверительные отношения с клиентами.";
        document.getElementById("product-info-delivery").innerText = "Это информация о доставке заказов. Расскажите, какие способы доставки вы предлагаете, как упаковываете заказы и сколько это стоит. Подробная информация о доставке вызывает доверие клиентов и помогает принять решение купить у вас товар.";
        document.getElementById("product-info-definition-header").innerText = "О товаре";
        document.getElementById("product-info-return-money-header").innerText = "ВОЗВРАТ ТОВАРА И ДЕНЕГ";
        document.getElementById("product-info-delivery-header").innerText = "ДОСТАВКА";
        document.getElementById("inputc").placeholder = "Количество";
        document.getElementById("product-info-count").innerText = "Количество";
        document.getElementById("product-info-button-to-cart").innerText = "В корзину";
        document.getElementById("index-product-description").innerText = "Operating system · Central processing unit ; Microsoft Windows 7 Home Premium Intel Core i5.";
        document.getElementById("index-read-more").innerText = "Читать больше";
    }
    if (pageName === 'index') {
        document.getElementById("slogan").innerText = "За покупками - в\n" +
            "«WEB PORTAL»";
        document.getElementById("index-our-history-header").innerText = "«WEB-PORTAL»: наша история";
        document.getElementById("index-our-history-text-1").innerText = "Лучший источник высокотехнологичных товаров";
        document.getElementById("index-our-history-text-2").innerText = "Если вам нужно отремонтировать технику или приобрести новую, «WEB PORTAL» справится с любым вашим запросом.";
        document.getElementById("index-our-history-text-3").innerText = "«WEB PORTAL» является ведущим магазином электронной техники в г. Нурсултан с 2008 года. Мы предлагаем Компьютеры, Мобильные телефоны, Ноутбуки и сопутствующие товары, а также формируем комплекты и подбираем аксессуары в соответствии с характеристиками, указанными клиентом. «WEB PORTAL» — это приятный шопинг. Мы поможем выбрать нужный товар, быстро и бесплатно доставим его и обеспечим профессиональную поддержку.";
        document.getElementById("index-our-products-header").innerText = "Наши товары";
        var productNameElements = document.getElementsByClassName('product-name');
        for(var i = 0; i < productNameElements.length; i++){
            productNameElements[i].innerText = "Dell XPS 13";
        }
        var productDescriptionElements = document.getElementsByClassName('product-description');
        for(var i = 0; i < productDescriptionElements.length; i++){
            productDescriptionElements[i].innerText = "Операционная система · Центральный процессор ; Microsoft Windows 7 Домашняя расширенная · Intel Core i5.";
        }

        var readMoreElements = document.getElementsByClassName('product-read-more');
        for(var i = 0; i < readMoreElements.length; i++){
            readMoreElements[i].innerText = "Читать больше";
        }
    }

}

function minus(){
    var x=document.getElementById('inputc').value;
    x--;
    if(x>=0){
        document.getElementById('inputc').value= x;
    }

}
