import {
    wine01,
    wine02,
    wine03,
    wine04,
    wine05,
    wine06,
    wine07,
    wine08,
    wine09,
    wine10,
    wine11,
    wine12
} from '../assets/images';

const wines = [
    {
        id: 1,
        name: 'Domaine Lorenzo Mercury',
        year: '2014',
        country: 'France',
        type: 'Rouge',
        region: 'Bourgogne',
        naming: 'Mercury 1er cru',
        price: '41,90',
        degree: '13.5',
        img: wine01,
        description: 'Ce vin rouge finesse est produit avec le cépage Pinot Noir à 100%. C’est un véritable cador, la grande classe, un flacon de grande réserve',
        expert: 'Lorenzon’s best plot. This has an intense, stylish floral nose with cherries and mint.',
        comment: 'Très bon',
        rating: '3'
    },
    {
        id: 2,
        name: 'Domaine Humbert Gevrey-Chambertin Vieilles Vignes',
        year: '2014',
        country: 'France',
        type: 'Rouge',
        region: 'Bourgogne',
        naming: 'Gevrey-Chambertin',
        price: '49,90',
        degree: '13',
        img: wine02,
        description: 'L’appellation Gevrey-Chambertin se trouve dans la Côte de Nuits en Bourgogne. Elle bénéficie d’un climat océanique et semi-continental et de sols calcaires et marneux. Seul le vin rouge à partir de Pinot Noir peut être élaboré sur cette AOP.',
        expert: 'Awesome !',
        comment: 'Du très haut de gamme ! Ou pas.',
        rating: '4'
    },
    {
        id: 3,
        name: 'Domaine Antonin Guyon Savigny Les Beaune Les Goudelettes',
        year: '2018',
        country: 'France',
        type: 'Rouge',
        region: 'Bourgogne',
        naming: 'Savigny les Beaune',
        price: '23,00',
        degree: '13',
        img: wine03,
        description: 'Bien que cette AOC ne soit pas la plus connue de Bourgogne, elle figure aux côtés de Meursault, Gevrey-Chambertin et Beaune parmi les appellations qui produisent le plus de vin annuellement',
        expert: 'No way.',
        comment: 'A ne pas consommer, peu importe la modération.',
        rating: '1'
    },
    {
        id: 4,
        name: 'Château d’Yquem 1892',
        year: '1892',
        country: 'France',
        type: 'Blanc',
        region: 'Bordeaux',
        naming: 'Sauternes',
        price: '60000,00',
        degree: '13',
        img: wine04,
        description: 'La robe de ce millésime 1892 présente une couleur ambre sombre aux reflets or particulièrement étincelants au passage de la lumière. Une robe incroyablement envoutante.',
        expert: 'Now, I can die.',
        comment: 'Ce rêve blanc !',
        rating: '5'
    },
    {
        id: 5,
        name: 'Château La Mission Haut-Brion',
        year: '2016',
        country: 'France',
        type: 'Blanc',
        region: 'Bordeaux',
        naming: 'Pessac-Léognan',
        price: '815,00',
        degree: '13',
        img: wine05,
        description: 'La nature est bien faite : à chaque aléa un peu extrême elle a opposé douceur et sérénité. Grâce à cela, le millésime 2016, riche en émotions et en rebondissements est une véritable réussite aussi bien pour les vins rouges que pour les vins blancs.',
        expert: 'Un cru qui rattrape les aléas des années passées. Une réussite absolue.',
        comment: 'Allez-y les yeux fermés !',
        rating: '4'
    },
    {
        id: 6,
        name: 'Domaine Uby n°3 Colombard Ugni',
        year: '2015',
        country: 'France',
        type: 'Blanc',
        region: 'Sud-Ouest',
        naming: 'Côtes de Gascogne ',
        price: '5,30',
        degree: '11.5',
        img: wine06,
        description: 'Cette cuvée Colombard Ugni Blanc est la référence phare du domaine et est l’exemple type d’un vin de Gascogne de qualité. Ce vin se caractérise par un très joli nez, intense qui s’exprime sur des notes de fruits exotiques, d’agrumes, le tout accompagné par une touche mentholée.',
        expert: 'Really ?',
        comment: 'Mon fils a aimé le jouet offert avec.',
        rating: '2'
    },
    {
        id: 7,
        name: 'Château Giscours',
        year: '201_',
        country: 'France',
        type: 'Rose',
        region: 'Bordeaux',
        naming: 'Cabernet Sauvignon',
        price: '11,90',
        degree: '13,5',
        img: wine07,
        description: 'En Gironde, seule l appellation régionale Bordeaux se décline en rosé.',
        expert: ' L AOC possède un encépagement varié et, si les trois couleurs sont vinifiées, le rosé l emporte.',
        comment: 'Bon cru',
        rating: '4,5'
    },

    {
        id: 8,
        name: 'Château Tour Saint Honoré',
        year: '2018',
        country: 'France',
        type: 'Rose',
        region: 'Provence',
        naming: 'Cinsault',
        price: '7,90',
        degree: '12,5',
        img: wine08,
        description: 'L’AOC Côtes de Provence couvre 18 000 hectares. La vigne marque le paysage provençal, de Marseille et Nice',
        expert: ' L AOC possède un encépagement varié et, si les trois couleurs sont vinifiées, le rosé l emporte.',
        comment: 'Très sucré',
        rating: '3'
    },

    {
        id: 9,
        name: 'Château Roubine',
        year: '2018',
        country: 'France',
        type: 'Rose',
        region: 'Provence',
        naming: 'Côtes de Provence',
        price: '11,90',
        degree: '13',
        img: wine09,
        description: 'L’AOC Côtes de Provence couvre 18 000 hectares. La vigne marque le paysage provençal, de Marseille et Nice',
        expert: ' L AOC possède un encépagement varié et, si les trois couleurs sont vinifiées, le rosé l emporte.',
        comment: 'Très sec',
        rating: '2'
    },
    {
        id: 10,
        name: 'Champagne Veuve Clicot',
        year: '2010',
        country: 'France',
        type: 'Champagne',
        region: 'Champagne',
        naming: 'Pinot Noir',
        price: '1900,50',
        degree: '12',
        img: wine10,
        description: 'Exelent',
        expert: 'Une seule qualité, la toute première',
        comment: 'Philippe Clicquot, le fondateur de la Maison, choisit en 1798 un symbole chrétien d espèrance : une ancre',
        rating: '5'
    },
    {
        id: 11,
        name: 'Champagne GH Mumm',
        year: '2015',
        country: 'France',
        type: 'Champagne',
        region: 'Champagne',
        naming: 'Pinot Noir',
        price: '17,50',
        degree: '12',
        img: wine11,
        description: 'GH Mumm Cordon Rouge : Une élaboration minutieuse à la recherche des meilleurs arômes',
        expert: 'Fruité et gourmandise',
        comment: 'Assemblée à partir de 77 crus, la cuvée Cordon Rouge est sans équivoque l’emblème de la maison GH Mumm.',
        rating: '4'
    },
    {
        id: 12,
        name: 'Champagne Dom Pérignon',
        year: '2009',
        country: 'France',
        type: 'Champagne',
        region: 'Champagne',
        naming: 'Pinot Noire',
        price: '165,50',
        degree: '12,5',
        img: wine12,
        description: 'Edition Tokujin Yoshioka est un millésime riche et ample',
        expert: 'Edition Tokujin Yoshioka est un millésime riche et ample',
        comment: 'trois sous-régions principales: la Montagne de Reims, la Côte des Blancs et la Vallée de la Marne.',
        rating: '5'
    },
    {
        id: 13,
        name: 'Domaine Lorenzo Mercury',
        year: '2014',
        country: 'France',
        type: 'Rouge',
        region: 'Bourgogne',
        naming: 'Mercury 1er cru',
        price: '41,90',
        degree: '13.5',
        img: wine01,
        description: 'Ce vin rouge finesse est produit avec le cépage Pinot Noir à 100%. C’est un véritable cador, la grande classe, un flacon de grande réserve',
        expert: 'Lorenzon’s best plot. This has an intense, stylish floral nose with cherries and mint.',
        comment: 'Très bon',
        rating: '3'
    },
    {
        id: 14,
        name: 'Domaine Humbert Gevrey-Chambertin Vieilles Vignes',
        year: '2014',
        country: 'France',
        type: 'Rouge',
        region: 'Bourgogne',
        naming: 'Gevrey-Chambertin',
        price: '49,90',
        degree: '13',
        img: wine02,
        description: 'L’appellation Gevrey-Chambertin se trouve dans la Côte de Nuits en Bourgogne. Elle bénéficie d’un climat océanique et semi-continental et de sols calcaires et marneux. Seul le vin rouge à partir de Pinot Noir peut être élaboré sur cette AOP.',
        expert: 'Awesome !',
        comment: 'Du très haut de gamme ! Ou pas.',
        rating: '4'
    },
    {
        id: 15,
        name: 'Domaine Antonin Guyon Savigny Les Beaune Les Goudelettes',
        year: '2018',
        country: 'France',
        type: 'Rouge',
        region: 'Bourgogne',
        naming: 'Savigny les Beaune',
        price: '23,00',
        degree: '13',
        img: wine03,
        description: 'Bien que cette AOC ne soit pas la plus connue de Bourgogne, elle figure aux côtés de Meursault, Gevrey-Chambertin et Beaune parmi les appellations qui produisent le plus de vin annuellement',
        expert: 'No way.',
        comment: 'A ne pas consommer, peu importe la modération.',
        rating: '1'
    },
    {
        id: 16,
        name: 'Château d’Yquem 1892',
        year: '1892',
        country: 'France',
        type: 'Blanc',
        region: 'Bordeaux',
        naming: 'Sauternes',
        price: '60000,00',
        degree: '13',
        img: wine04,
        description: 'La robe de ce millésime 1892 présente une couleur ambre sombre aux reflets or particulièrement étincelants au passage de la lumière. Une robe incroyablement envoutante.',
        expert: 'Now, I can die.',
        comment: 'Ce rêve blanc !',
        rating: '5'
    },
    {
        id: 17,
        name: 'Château La Mission Haut-Brion',
        year: '2016',
        country: 'France',
        type: 'Blanc',
        region: 'Bordeaux',
        naming: 'Pessac-Léognan',
        price: '815,00',
        degree: '13',
        img: wine05,
        description: 'La nature est bien faite : à chaque aléa un peu extrême elle a opposé douceur et sérénité. Grâce à cela, le millésime 2016, riche en émotions et en rebondissements est une véritable réussite aussi bien pour les vins rouges que pour les vins blancs.',
        expert: 'Un cru qui rattrape les aléas des années passées. Une réussite absolue.',
        comment: 'Allez-y les yeux fermés !',
        rating: '4'
    },
    {
        id: 18,
        name: 'Domaine Uby n°3 Colombard Ugni',
        year: '2015',
        country: 'France',
        type: 'Blanc',
        region: 'Sud-Ouest',
        naming: 'Côtes de Gascogne ',
        price: '5,30',
        degree: '11.5',
        img: wine06,
        description: 'Cette cuvée Colombard Ugni Blanc est la référence phare du domaine et est l’exemple type d’un vin de Gascogne de qualité. Ce vin se caractérise par un très joli nez, intense qui s’exprime sur des notes de fruits exotiques, d’agrumes, le tout accompagné par une touche mentholée.',
        expert: 'Really ?',
        comment: 'Mon fils a aimé le jouet offert avec.',
        rating: '2'
    },
    {
        id: 19,
        name: 'Château Giscours',
        year: '201_',
        country: 'France',
        type: 'Rose',
        region: 'Bordeaux',
        naming: 'Cabernet Sauvignon',
        price: '11,90',
        degree: '13,5',
        img: wine07,
        description: 'En Gironde, seule l appellation régionale Bordeaux se décline en rosé.',
        expert: ' L AOC possède un encépagement varié et, si les trois couleurs sont vinifiées, le rosé l emporte.',
        comment: 'Bon cru',
        rating: '4,5'
    },

    {
        id: 20,
        name: 'Château Tour Saint Honoré',
        year: '2018',
        country: 'France',
        type: 'Rose',
        region: 'Provence',
        naming: 'Cinsault',
        price: '7,90',
        degree: '12,5',
        img: wine08,
        description: 'L’AOC Côtes de Provence couvre 18 000 hectares. La vigne marque le paysage provençal, de Marseille et Nice',
        expert: ' L AOC possède un encépagement varié et, si les trois couleurs sont vinifiées, le rosé l emporte.',
        comment: 'Très sucré',
        rating: '3'
    },

    {
        id: 21,
        name: 'Château Roubine',
        year: '2018',
        country: 'France',
        type: 'Rose',
        region: 'Provence',
        naming: 'Côtes de Provence',
        price: '11,90',
        degree: '13',
        img: wine09,
        description: 'L’AOC Côtes de Provence couvre 18 000 hectares. La vigne marque le paysage provençal, de Marseille et Nice',
        expert: ' L AOC possède un encépagement varié et, si les trois couleurs sont vinifiées, le rosé l emporte.',
        comment: 'Très sec',
        rating: '2'
    },
    {
        id: 22,
        name: 'Champagne Veuve Clicot',
        year: '2010',
        country: 'France',
        type: 'Champagne',
        region: 'Champagne',
        naming: 'Pinot Noir',
        price: '1900,50',
        degree: '12',
        img: wine10,
        description: 'Exelent',
        expert: 'Une seule qualité, la toute première',
        comment: 'Philippe Clicquot, le fondateur de la Maison, choisit en 1798 un symbole chrétien d espèrance : une ancre',
        rating: '5'
    },
    {
        id: 23,
        name: 'Champagne GH Mumm',
        year: '2015',
        country: 'France',
        type: 'Champagne',
        region: 'Champagne',
        naming: 'Pinot Noir',
        price: '17,50',
        degree: '12',
        img: wine11,
        description: 'GH Mumm Cordon Rouge : Une élaboration minutieuse à la recherche des meilleurs arômes',
        expert: 'Fruité et gourmandise',
        comment: 'Assemblée à partir de 77 crus, la cuvée Cordon Rouge est sans équivoque l’emblème de la maison GH Mumm.',
        rating: '4'
    },
    {
        id: 24,
        name: 'Champagne Dom Pérignon',
        year: '2009',
        country: 'France',
        type: 'Champagne',
        region: 'Champagne',
        naming: 'Pinot Noire',
        price: '165,50',
        degree: '12,5',
        img: wine12,
        description: 'Edition Tokujin Yoshioka est un millésime riche et ample',
        expert: 'Edition Tokujin Yoshioka est un millésime riche et ample',
        comment: 'trois sous-régions principales: la Montagne de Reims, la Côte des Blancs et la Vallée de la Marne.',
        rating: '5'
    },
]

export default wines;