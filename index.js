const app = require('express')();
let alumnos = [{nombre:'Jorge Chi', matricula:'A15003408'},
{nombre:'Alberto Leon', matricula:'A15003407'},
{nombre:'George Lion', matricula:'A15003404'},
];

app.get('/', (req, res ) => 
    res.json(alumnos) 
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );