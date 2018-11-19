export const configArr = {
    //This keys stores the Global configuaration values
    'Global':{
        //Place your values here that you want to send with every api request
        'parameters':{
            'key': 'PLACE YOUR API KEY HERE',
        },
        'url': 'URL of your API'
    },
    //Below keys define the parameters that will be send for the selected selection
    'Trending':{
        parameters:{
            params: {'chart': 'mostpopular', 'maxResults': 10},
            endpoint:'videos',
        }
    }
}