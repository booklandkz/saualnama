// Есімдер мен олардың тегтері және орнын көрсететін деректер
const nameList = [
    { name: 'Күләйша', surname: 'Тәниқызы', place: 1 },
    { name: 'Мирамкүл', surname: 'Жүсіпәлиқызы', place: 2 },
    { name: 'Ақбота', surname: 'Жолмағанбетқызы', place: 3 },
    { name: 'Күлзира', surname: 'Алдабергенқызы', place: 4 },
    { name: 'Ләззат', surname: 'Өменқызы', place: 5 },
    { name: 'Бақытбек', surname: 'Рысдәулетұлы', place: 6 },
    { name: 'Ғалымжан', surname: 'Жұмағалиұлы', place: 7 },
    { name: 'Мәди', surname: 'Жасұланұлы', place: 8 },
    { name: 'Қасқырбек', surname: 'Күзенбайұлы', place: 9 }
];

// Enter батырмасын басқанда submitName функциясын шақыру
document.getElementById('nameInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitName();
    }
});

function capitalizeWords(input) {
    return input
        .toLowerCase() // Бүкіл мәтінді кіші әріпке түрлендіру
        .split(' ') // Бос орын арқылы бөліктерге бөлу
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Әр сөздің бірінші әрпін бас әріпке ауыстыру
        .join(' '); // Сөздерді қайта біріктіру
}

function submitName() {
    let input = document.getElementById('nameInput').value.trim();

    // Есімді автоматты түрде бас әріпке ауыстыру
    input = capitalizeWords(input);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Алдыңғы нәтижені өшіру

    if (input === '') {
        alert('Есім енгізіңіз!');
        return;
    }

    let message = document.createElement('p');

    // Есімді тексеру
    const foundPerson = nameList.find(person => person.name === input);

    if (foundPerson) {
        message.className = 'correct';
        message.textContent = `${foundPerson.name} ${foundPerson.surname} - Қош келдіңіз, сіздің орныңыз: ${foundPerson.place}`;
    } else {
        message.className = 'incorrect';
        message.textContent = `${input} - Өкінішке орай сізді мәліметтер қорынан таба алмадым.`;
    }

    resultDiv.appendChild(message);

    // Енгізу өрісін тазарту
    document.getElementById('nameInput').value = '';
}
