document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('column', {
        chart: {
            type: 'column', //line (linha), column(coluna) bar (barra horizontal), scatter(ponto), area, areaspline
            zoomType: 'xy' //y e xy espandir área selecionada 
        },
        title: { //título do gráfico
            text: 'Venda de Produtos'
        },
        credits: { //créditos
            enabled: false //removendo os créditos
        },
        tooltip: { //dica de contexto
            formatter(){ //valores 
                //return `<strong>X valor</strong> ${this.x} - <em>Y valor</em> ${this.y}`
                // let s = `X: ${this.x}`;
                let s = ``;
                //console.log(this); //verificar todas as propriedades
                this.points.forEach(function(point){
                    s += `</br>${point.y} - ${point.series.name}`;
                });
                return s;
            },
            shared: true, //todas as caixas tem os valores dos outros
            animation: false, //desativando animação 
            backgroundColor: 'black',
            borderColor: 'red',
            borderRadius: 20,
            followPointer: false, // Desabilitando seguir o mouse
            style: {
                color: 'white'
            }
        },
        //Customizando as cores *Caso tenha mais dados as cores repetem
        colors: ['#92a8d1', '#f7cac9', '#80ced6', '#c1502e', '#ffcc5c'],
        xAxis: { // cateogiras do eixo x
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        },
        yAxis: { //título do eixo y
            //alternateGridColor: 'green', //mudar cor do grid
            title: {
                text: 'Quantidade de Vendas'
            }
        },
        series: [ //dados
            {
                name: 'Camisa', 
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
             },
            {
                name: 'Calça', 
                data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
            },
            {
                name: 'Tênis', 
                data: [2, 3, 4, 8, 9, 10, 12, 13, 14, 4, 1, 9]
            }
        ]
    });
    Highcharts.chart('line', {
        chart: {
            type: 'line', //line (linha), column(coluna) bar (barra horizontal), scatter(ponto), area, areaspline
            zoomType: 'xy' //y e xy espandir área selecionada 
        },
        title: { //título do gráfico
            text: 'Venda de Produtos'
        },
        credits: { //créditos
            enabled: false //removendo os créditos
        },
        tooltip: { //dica de contexto
            formatter(){ //valores 
                //return `<strong>X valor</strong> ${this.x} - <em>Y valor</em> ${this.y}`
                // let s = `X: ${this.x}`;
                let s = ``;
                //console.log(this); //verificar todas as propriedades
                this.points.forEach(function(point){
                    s += `</br>${point.y} - ${point.series.name}`;
                });
                return s;
            },
            shared: true, //todas as caixas tem os valores dos outros
            animation: false, //desativando animação 
            backgroundColor: 'black',
            borderColor: 'red',
            borderRadius: 20,
            followPointer: false, // Desabilitando seguir o mouse
            style: {
                color: 'white'
            }
        },
        //Customizando as cores *Caso tenha mais dados as cores repetem
        colors: ['#92a8d1', '#f7cac9', '#80ced6', '#c1502e', '#ffcc5c'],
        xAxis: { // cateogiras do eixo x
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        },
        yAxis: { //título do eixo y
            //alternateGridColor: 'green', //mudar cor do grid
            title: {
                text: 'Quantidade de Vendas'
            }
        },
        series: [ //dados
            {
                name: 'Camisa', 
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
             },
            {
                name: 'Calça', 
                data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
            },
            {
                name: 'Tênis', 
                data: [2, 3, 4, 8, 9, 10, 12, 13, 14, 4, 1, 9]
            }
        ]
    });
    Highcharts.chart('bar', {
        chart: {
            type: 'bar', //line (linha), column(coluna) bar (barra horizontal), scatter(ponto), area, areaspline
            zoomType: 'xy' //y e xy espandir área selecionada 
        },
        title: { //título do gráfico
            text: 'Venda de Produtos'
        },
        credits: { //créditos
            enabled: false //removendo os créditos
        },
        tooltip: { //dica de contexto
            formatter(){ //valores 
                //return `<strong>X valor</strong> ${this.x} - <em>Y valor</em> ${this.y}`
                // let s = `X: ${this.x}`;
                let s = ``;
                //console.log(this); //verificar todas as propriedades
                this.points.forEach(function(point){
                    s += `</br>${point.y} - ${point.series.name}`;
                });
                return s;
            },
            shared: true, //todas as caixas tem os valores dos outros
            animation: false, //desativando animação 
            backgroundColor: 'black',
            borderColor: 'red',
            borderRadius: 20,
            followPointer: false, // Desabilitando seguir o mouse
            style: {
                color: 'white'
            }
        },
        //Customizando as cores *Caso tenha mais dados as cores repetem
        colors: ['#92a8d1', '#f7cac9', '#80ced6', '#c1502e', '#ffcc5c'],
        xAxis: { // cateogiras do eixo x
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        },
        yAxis: { //título do eixo y
            //alternateGridColor: 'green', //mudar cor do grid
            title: {
                text: 'Quantidade de Vendas'
            }
        },
        series: [ //dados
            {
                name: 'Camisa', 
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
             },
            {
                name: 'Calça', 
                data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
            },
            {
                name: 'Tênis', 
                data: [2, 3, 4, 8, 9, 10, 12, 13, 14, 4, 1, 9]
            }
        ]
    });
});