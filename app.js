import express from 'express';

const app = express();
let workouts = [];

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// Updated port from 3000 to 3001 because of a temporary network port issue (port in use)
const PORT = 3001;

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/logworkout', (req, res) => {
    var exercise = {
        workoutType: req.body.workoutType,
        duration: req.body.duration,
        intensity: req.body.intensity,
        date: req.body.date,
        notes: req.body.notes
    }
    console.log(exercise);
    workouts.push(exercise);
    console.log(workouts);
    res.redirect('/summary');
});

app.get('/summary', (req, res) => {
    res.render('summary', { workouts });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});