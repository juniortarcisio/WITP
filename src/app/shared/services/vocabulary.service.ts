import { Injectable } from '@angular/core';

@Injectable()
export class VocabularyService {

  constructor() { }
  
  albums = [
    {
        id: 0, name: "Basic Words", icon: "fa-cubes",
        decks: [
            {
                id: 0,
                name: "Subjects",
                words: [
                    { lang: ["I", "Eu", "Saya"], obs: [null, null, "formal"] },
                    { lang: ["I", "Eu", "Aku"], obs: [null, null, "informal"], show: [false, false, true] },
                    { lang: ["You", "Você", "Anda"], obs: [null, null, "formal"] },
                    { lang: ["You", "Você", "Kamu"], obs: [null, null, "informal"], show: [false, false, true] },
                    { lang: ["He", "Ele", "Dia"], obs: ["Male", "Male", null] },
                    { lang: ["She", "Ela", "Dia"], obs: ["Female", "Female", null], show: [true, true, false] },
                    { lang: ["They", "Eles", "Mereka"], obs: ["Male", "Male", null] },
                    { lang: ["They", "Elas", "Mereka"], obs: [null, "Female", null], show: [false, true, false] },
                    { lang: ["This", "Este", "Ini"] },
                    { lang: ["These", "Estes", "Ini"], obs: ["Plural", "Plural", null], show: [true, true, false] },
                    { lang: ["That", "Aquele", "Itu"] },
                    { lang: ["Those", "Aqueles", "Itu"], obs: ["Plural", "Plural", null], show: [true, true, false] },
                    { lang: ["We", "Nós", "Kami"], obs: [null, null, "Excludes the listener"] },
                    { lang: ["We", "Nós", "Kita"], obs: [null,null,"Includes the listener"], show: [false,false,true] }
                ]
            },
            {
                id: 1,
                name: "Question Words",
                words: [
                    { lang: ["What", "O que", "Apa"] },
                    { lang: ["Who", "Quem", "Siapa"] },
                    { lang: ["Where", "Onde", "Di mana"] },
                    { lang: ["When", "Quando", "Kapan"] },
                    { lang: ["How", "Como", "Bagaimana"] },
                    { lang: ["How long", "Quanto tempo", "Berapa lama"] },
                    { lang: ["How much", "Quanto", "Berapa banyak"] },
                    { lang: ["How old", "Quantos anos", "Berapa umur"] },
                    { lang: ["How far", "Quão longe", "Berapa Jauh"] },
                    { lang: ["Question", "Pergunta", "Tanya"] }
                ]
            },
            {
                id: 2,
                name: "Modal Verbs",
                words: [
                    { lang: ["Can", "Posso", "Bisa"] },
                    { lang: ["Could", "Poderia", "Bisa"], obs: ['Polite', 'Polite', null], show: [true, true, false] },// Polite thisWordAlsoMeans: [][][0]
                    { lang: ["Will", "Vou", "Akan"] },
                    { lang: ["Would", "Iria", "Akan"], obs: ['Hypothetical', 'Hypothetical', null], show: [true, true, false] }, //Hypotetical / polite, would you like -> gostaria
                    { lang: ["Must", "Devo", "Harus"] },
                    { lang: ["Should", "Deveria", "Harus"], obs: ['Polite', 'Polite', null], show: [true, true, false] },
                    { lang: ["Need", "Precisar", "Perlu"] },
                    { lang: ["Want", "Querer", "Mau"] },
                    { lang: ["Would like", "Gostaria", "Ingin"], obs: ['Polite', 'Polite', 'Polite']},
                    { lang: ["Know", "Saber", "Tau"] }
                    //{ lang: ["May", "Posso", "Bisa"] }
                ]
            },
            {
                id: 3,
                name: "Key Words",
                words: [
                    { lang: ["For", "Para", "Untuk"] },
                    { lang: ["But", "Mas", "Tapi"] },
                    { lang: ["If", "Se", "Kalau"] },
                    { lang: ["Then", "Então", "Kemudian"] },
                    { lang: ["Or", "Ou", "Atau"] },
                    { lang: ["And", "E", "Dan"] },
                    { lang: ["Already", "Já", "Sudah"] },
                    { lang: ["Yet", "Ainda", "Namun"] },
                    { lang: ["Not yet", "Ainda não", "Belum"] },
                    { lang: ["Ever", "Sempre", "Pernah"] },
                    { lang: ["Never", "Nunca", "Tak pernah"] },
                    { lang: ["Again", "De novo", "Lagi"] },
                    { lang: ["Really", "Realmente", "Yang Benar"] },
                    { lang: ["Alone", "Sozinho", "Sendiri"] },
                    { lang: ["With", "Com", "Dengan"] },
                    { lang: ["Give", "Dar", "Berikan"] },
                    { lang: ["Only", "Somente", "Saja"] },
                    { lang: ["Maybe", "Talvez", "Mungkin"] },
                    { lang: ["More", "Mais", "Lebih"] },
                    { lang: ["Very", "Muito", "Sangat"] }, //uncountable
                    { lang: ["A lot", "Muito", "Banyak"] },
                    { lang: ["Together", "Juntos", "Bersama"] },
                    { lang: ["Join", "Juntar-se", "Ikut"] },
                    { lang: ["As", "Como", "Seperti"] },
                    { lang: ["Like", "Como", "Suka"] },
                    { lang: ["Continue", "Continuar", "Terus"] }
                ]
            },
            {
                id: 4,
                name: "Colors",
                words: [
                    { lang: ["Blue", "Azul", "Biru"] },
                    { lang: ["Red", "Vermelho", "Merah"] },
                    { lang: ["Yellow", "Amarelo", "Kuning"] },
                    { lang: ["Green", "Verde", "Hijau"] },
                    { lang: ["White", "Branco", "Putih"] },
                    { lang: ["Black", "Preto", "Hitam"] },
                    { lang: ["Purple", "Roxo", "Ungu"] },
                    { lang: ["Orange", "Laranja", "Oranye"] },
                    { lang: ["Brown", "Marrom", "Coklat"] },
                    { lang: ["Pink", "Rosa", "Merah muda"] },
                    { lang: ["Grey", "Cinza", "Abu-abu"] }
                ]
            }
            //,
            //{
            //    id: 6,
            //    name: "Expressions",
            //    words: [
            //        { lang: ["Thank you", "Obrigado", "Terima kasih"] },
            //        { lang: ["Good day", "Bom dia", "Selamat pagi"] },
            //        { lang: ["Good afternoon", "Boa tarde", "Selamat sore"] }
            //    ]
            //}
        ]
    },
    {
        id: 1, name: "Verbs & Actions", icon: "fa-hand-scissors-o",
        decks: [
            {
                id: 0,
                name: "General Actions",
                words: [
                    { lang: ["To Be", "Ser", "Menjadi"] },
                    { lang: ["To Do", "Fazer", "Melakukan"] },
                    { lang: ["To Have", "Ter", "Punya"] }, //memiliki
                    { lang: ["To Like", "Gostar", "Suka"] },
                    { lang: ["To Know", "Saber", "Tahu"] },
                    { lang: ["To Think", "Pensar", "Berpikir"] },
                    { lang: ["To Look", "Ver", "Melihat"] },
                    { lang: ["To Work", "Trabalhar", "Bekerja"] },
                    { lang: ["To Study", "Estudar", "Belajar"] },
                    { lang: ["To Use", "Usar", "Menggunakan"] },
                    { lang: ["To Help", "Ajudar", "Membantu"] }
                ]
            },
            {
                id: 0,
                name: "Physical Actions",
                words: [
                    { lang: ["To Walk", "Andar", "Berjalan"] },
                    { lang: ["To Go", "Ir", "Pergi"] },
                    { lang: ["To Swim", "Nadar", "Berang"] },
                    { lang: ["To Run", "Correr", "Menjalankan"] },
                    { lang: ["To Wait", "Esperar", "Menunggu"] },
                    { lang: ["To Get", "Pegar", "Mendapatkan"] },
                    { lang: ["To Take", "Tomar", "Mengambil"] },
                    { lang: ["To Give", "Dar", "Memberi"] },
                    { lang: ["To Eat", "Comer", "Makan"] },
                    { lang: ["To Drink", "Beber", "Minum"] },
                    { lang: ["To Play", "Jogar", "Bermain"] }
                ]
            },
            {
                id: 1,
                name: "Verbal Actions",
                words: [
                    { lang: ["To Talk", "Falar", "Berbicara"] },
                    { lang: ["To Ask", "Perguntar", "Bertanya"], obs: ['Question', null, null] },
                    { lang: ["To Ask", "Pedir", "Minta"], obs: ['Require', null, null], show: [false, true, true] },
                    { lang: ["To Talk", "Conversar", "Berbicara"], obs: ['conversation', 'conversation', null], show: [true, true, false] },
                    { lang: ["To Speak", "Falar", "Berbicara"], obs: ['language', 'language', 'language'] },
                    { lang: ["To Say", "Dizer", "Mengatakan"], obs: ['something', 'something', 'something'] },
                    { lang: ["To Tell", "Contar", "Menceritakan"], obs: ['story', 'story', 'story'] },
                    { lang: ["To Call", "Chamar", "Memanggil"]},
                    { lang: ["To Hear", "Ouvir", "Mendengar"], obs: ['sound', 'sound', 'sound'] },
                    { lang: ["To Listen", "Escutar", "Mendengarkan"] },
                    { lang: ["To Understand", "Entender", "Mergenti"] }
                ]
            }
        ]
    },
    {
        id: 2, name: "Math & Time", icon: "fa-calculator",
        decks: [
            {
                id: 0,
                name: "Basic Numbers",
                words: [
                    { lang: ["One", "Um", "Satu"] },
                    { lang: ["Two", "Dois", "Dua"] },
                    { lang: ["Three", "Três", "Tiga"] },
                    { lang: ["Four", "Quartro", "Empat"] },
                    { lang: ["Five", "Cinco", "Lima"] },
                    { lang: ["Six", "Seis", "Enam"] },
                    { lang: ["Seven", "Sete", "Tujuh"] },
                    { lang: ["Eight", "Oito", "Delapan"] },
                    { lang: ["Nine", "Nove", "Sembilan"] },
                    { lang: ["Teen", "Dez", "Sepuluh"] },
                    { lang: ["Eleven", "Onze", "Sebelas"] },
                    { lang: ["Twelve", "Doze", "Dua belas"] },
                    { lang: ["Thirteen", "Treze", "Tiga belas"] },
                    { lang: ["Fourteen", "Quatorze", "Empat belas"] },
                    { lang: ["Fifteen", "Quinze", "Lima belas"] },
                    { lang: ["Sixteen", "Dezesseis", "Enam belas"] },
                    { lang: ["Seventeen", "Dezessete", "Tujuh belas"] },
                    { lang: ["Eightteen", "Dezoito", "Delapan belas"] },
                    { lang: ["Nineteen", "Dezenove", "Sembilan belas"] },
                    { lang: ["Twenty", "Vinte", "Dua Puluh"] },
                    { lang: ["Thirty", "Trinta", "Tiga Puluh"] },
                    { lang: ["Fourty", "Quarenta", "Empat Puluh"] },
                    { lang: ["Fifty", "Cinquenta", "Lima Puluh"] },
                    { lang: ["One Hundred", "Cem", "Seratus"] },
                    { lang: ["Two Hundred", "Duzentos", "Dua Ratus"] },
                    { lang: ["Three Hundred", "Trezentos", "Tiga Ratus"] },
                    { lang: ["One Thousand", "Mil", "Seribu"] },
                    { lang: ["Two Thousand", "Dois Mil", "Dua Ribu"] },
                    { lang: ["Three Thousand", "Três Mil", "Tiga Ribu"] },
                    { lang: ["One Million", "Um Milhão", "Satu Juta"] },
                    { lang: ["Two Million", "Dois Milhões", "Dua Juta"] },
                    { lang: ["Three Million", "Três Milhões", "Tiga Juta"] },
                    { lang: ["One Billion", "Um Bilhão", "Satu Miliar"] },
                    { lang: ["Two Billion", "Dois Bilhões", "Dua Miliar"] },
                    { lang: ["Three Billion", "Três Bilhões", "Tiga Miliar"] },
                    { lang: ["One Trillion", "Um Trilhão", "Satu Triliun"] },
                    { lang: ["Two Trillion", "Dois Trilhões", "Dua Triliun"] },
                    { lang: ["Three Trillion", "Três Trilhões", "Tiga Triliun"] }
                ]
            },
            {
                id: 1,
                name: "Ordinal Numbers",
                words: [
                    { lang: ["First", "Primeiro", "Pertama"] },
                    { lang: ["Second", "Segundo", "Kedua"] },
                    { lang: ["Third", "Terceiro", "Ketiga"] },
                    { lang: ["Fourth", "Quarto", "Keempat"] },
                    { lang: ["Fifth", "Quinto", "Kelima"] },
                    { lang: ["Sixth", "Sexto", "Keenam"] },
                    { lang: ["Seventh", "Setimo", "Ketujuh"] },
                    { lang: ["Eighth", "Oitavo", "Kedelapan"] },
                    { lang: ["Ninth", "Nono", "Kesembilan"] },
                    { lang: ["Tenth", "Décimo", "Kesepuluh"] }
                ]
            },
            {
                id: 2,
                name: "Ocurrencies",
                words: [
                    { lang: ["Once", "Uma Vez", "Satu Kali"] },
                    { lang: ["Twice", "Duas Vezes", "Dua Kali"] },
                    { lang: ["Three Times", "Três Vezes", "Tiga Kali"] },
                    { lang: ["Four Times", "Quatro Vezes", "Empat Kali"] },
                    { lang: ["Five Times", "Cinco Vezes", "Lima Kali"] },
                    { lang: ["Six Times", "Seis Vezes", "Enam Kali"] },
                    { lang: ["Seven Times", "Sete Vezes", "Tujuh Kali"] },
                    { lang: ["Eight Times", "Oito Vezes", "Delapan Kali"] },
                    { lang: ["Nine Times", "Nove Vezes", "Sembilan Kali"] },
                    { lang: ["Ten Times", "Dez Vezes", "Sepuluh Kali"] }
                ]
            },
            {
                id: 3,
                name: "Fractions",
                words: [
                    { lang: ["Half", "Metade", "Setengah"] },
                    { lang: ["One Third", "Um Terço", "Sepertiga"] },
                    { lang: ["One Quarter", "Um Quarto", "Seperempat"] },
                    { lang: ["One Fifth", "Um Quinto", "Seperlima"] },
                    { lang: ["One Sixth", "Um Sexto", "Seperenam"] },
                    { lang: ["One Seventh", "Um Sétimo", "Sepertujuh"] },
                    { lang: ["One Eighth", "Um Oitavo", "Seperdelapan"] },
                    { lang: ["One Nineth", "Um Nono", "Sepersembilan"] },
                    { lang: ["One Tenth", "Um Décimo", "Sepersepuluh"] },
                    { lang: ["One Eleventh", "Onze avos", "Sepersebelas"] }
                ]
            },
            {
                id: 4,
                name: "Time",
                words: [
                    { lang: ["Second", "Segundo", "Detik"] },
                    { lang: ["Minute", "Minuto", "Menit"] },
                    { lang: ["Hour", "Hora", "Waktu"] },
                    { lang: ["Morning", "Manhã", "Pagi"] },
                    { lang: ["Afternoon", "Tarde", "Siang"] },
                    { lang: ["Evening", "Tarde", "Sore"], show: [true, false, true] },
                    { lang: ["Night", "Noite", "Malam"] },
                    { lang: ["Day", "Dia", "Hari"] },
                    { lang: ["Week", "Semana", "Minggu"] },
                    { lang: ["Month", "Mês", "Bulan"] },
                    { lang: ["Year", "Ano", "Tahun"] },
                    { lang: ["Tomorrow", "Amanhã", "Besok"] },
                    { lang: ["Yesterday", "Ontem", "Kemaren"] },
                    { lang: ["Later", "Mais tarde", "Nanti"] }
                ]
            },
            {
                id: 5,
                name: "Measure",
                words: [
                    { lang: ["Measure", "Medida", "Mengukur"] },
                    { lang: ["Big", "Grande", "Besar"] },
                    { lang: ["Small", "Pequeno", "Kecil"] },
                    { lang: ["Tall", "Alto", "Tinggi"] },
                    { lang: ["Short", "Baixo", "Pendek"], obs: [null,'Tall Opposite', null], show:[false,true,false] },
                    { lang: ["Long", "Longo", "Panjang"] },
                    { lang: ["Short", "Curto", "Pendek"], obs: [null, 'Long Opposite', null] },
                    { lang: ["Heavy", "Pesado", "Berat"] },
                    { lang: ["Light", "Leve", "Ringan"] }, 
                    { lang: ["Narrow", "Estreito", "Sempit"] },
                    { lang: ["Wide", "Estreito", "Lebar"] },
                    { lang: ["Thick", "Grosso", "Tebal"] },
                    { lang: ["Thin", "Fino", "Tipis"] },
                    { lang: ["Fast", "Rápido", "Cepat"] },
                    { lang: ["Slow", "Lento", "Pelan"] },
                    { lang: ["Far", "Longe", "Jauh"] },
                    { lang: ["Near", "Perto", "Dekat"] }
                ]
            },
            {
                id: 6,
                name: "Weekdays",
                words: [
                    { lang: ["Sunday", "Domingo", "Minggu"] },
                    { lang: ["Monday", "Segunda-feira", "Senin"] },
                    { lang: ["Tuesday", "Terça-feira", "Selasa"] },
                    { lang: ["Wednesday", "Quarta-feira", "Rabu"] },
                    { lang: ["Thursday", "Quinta-feira", "Kamis"] },
                    { lang: ["Friday", "Sexta-feira", "Jumat"] },
                    { lang: ["Saturday", "Sabado", "Sabtu"] }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Places & Routes", icon: "fa-map",
        decks: [
            {
                id: 0,
                name: "Directions",
                words: [
                    { lang: ["North", "Norte", "Utara"] },
                    { lang: ["East", "Leste", "Timur"] },
                    { lang: ["South", "Sul", "Selatan"] },
                    { lang: ["West", "Oeste", "Barat"] },
                    { lang: ["Ahead", "Frente", "Depan"] },
                    { lang: ["Left", "Esquerda", "Kiri"] },
                    { lang: ["Behind", "Atrás", "Belakang"] },
                    { lang: ["Right", "Direita", "Kanan"] },
                    { lang: ["Near", "Perto", "Dekat"] },
                    { lang: ["Far", "Longe", "Jauh"] }
                ]
            },
            {
                id: 1,
                name: "Geography",
                words: [
                    { lang: ["Address", "Endereço", "Alamat"] },
                    { lang: ["Street", "Rua", "Jalan"] },
                    { lang: ["Highway", "Rodovia", "Jalan Raya"] },
                    { lang: ["Neighborhood", "Bairro", "Lingkungan"] },
                    { lang: ["City", "Cidade", "Kota"] },
                    { lang: ["Province", "Província", "Propinsi"] },
                    { lang: ["State", "Estado", "Negarabagian"] },
                    { lang: ["Country", "País", "Negara"] },
                    { lang: ["Continent", "Continente", "Benua"] },
                    { lang: ["Planet", "Planeta", "Planet"] },
                    { lang: ["Galaxy", "Galaxia", "Galaksi"] }
                ]
            },
            {
                id: 2,
                name: "Home",
                words: [
                    { lang: ["House", "Casa", "Rumah"] },
                    { lang: ["Apartment", "Apartamento", "Apartemen"] },
                    { lang: ["Bathroom", "Banheiro", "Kamar mandi"] },
                    { lang: ["Restroom", "Toalete", "Kamar kecil"] },
                    { lang: ["Bedroom", "Quarto", "Kamar tidur"] },
                    { lang: ["Living room", "Sala", "Ruang keluarga"] },
                    { lang: ["Kitchen", "Cozinha", "Dapur"] },
                    { lang: ["Laundry", "Lavanderia", "Laundry"] },
                    { lang: ["Backyard", "Quintal", "Halaman belakang"] },
                    { lang: ["Garage", "Garagem", "Kolam Renang"] }
                ]
            },
            {
                id: 3,
                name: "Vehicles",
                words: [
                    { lang: ["Bicycle", "Moto", "Sepeda"] },
                    { lang: ["Scooter", "Lambreta", "Skuter"] },
                    { lang: ["Bike", "Moto", "Sepeda Motor"] },
                    { lang: ["Car", "Carro", "Mobil"] },
                    { lang: ["Truck", "Caminhão", "Truk"] },
                    { lang: ["Tractor", "Trator", "Traktor"] },
                    { lang: ["Bus", "Ônibus", "Bus"] },
                    { lang: ["Train", "Trem", "Melatih"] },
                    { lang: ["Subway", "Metrô", "Kereta bawah tanah"] },
                    { lang: ["Boat", "Barco", "Peharu"] },
                    { lang: ["Ship", "Navio", "Kapal"] },
                    { lang: ["Helicopter", "Helicóptero", "Helikopter"] },
                    { lang: ["Airplane", "Avião", "Pesawat terbang"] },
                    { lang: ["Rocket", "Foguete", "Roket"] }
                ]
            },
            {
                id: 4,
                name: "Climate",
                words: [
                    { lang: ["Suny", "Ensolarado", "Cerah"] },
                    { lang: ["Cloudy", "Nublado", "Berawan"] },
                    { lang: ["Rainy", "Chuvoso", "Hujan"] },
                    { lang: ["Tempest", "Tempestade", "Badai"] },
                    { lang: ["Rain", "Chuva", "Hujan"] },
                    { lang: ["Snow", "Neve", "Salju"] },
                    { lang: ["Cloud", "Nuvem", "Awan"] },
                    { lang: ["Sky", "Céu", "Langit"] },
                    { lang: ["Sun", "Sol", "Matahari"] },
                    { lang: ["Moon", "Lua", "Bulan"] },
                    { lang: ["Star", "Estrela", "Bintang"] }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Cousine", icon: "fa-coffee",
        decks: [
            {
                id: 0,
                name: "Food",
                words: [
                    { lang: ["Chicken Meat", "Carne de Frango", "Daging Ayam"] },
                    { lang: ["Cow Meat", "Carne de Vaca", "Daging Sapi"] },
                    { lang: ["Pork Meat", "Carne de Porco", "Daging Babi"] },
                    { lang: ["Fried Fish", "Peixe Frito", "Ikan Goreng"] },
                    { lang: ["Grilled", "Grelhado", "Bakar"] },
                    { lang: ["Roasted", "Assado", "Panggang"] },
                    { lang: ["Cooked", "Cozido", "Masak"] },
                    { lang: ["Spicy", "Apimentado", "Pedas"] },
                    { lang: ["Noodles", "Miojo", "Mi"] },
                    { lang: ["Rice", "Arroz", "Nasi"] },
                    { lang: ["Egg", "Ovo", "Telur"] }
                ]
            },
            {
                id: 1,
                name: "Drink",
                words: [
                    { lang: ["Water", "Água", "Air putih"] },
                    { lang: ["Coffee", "Café", "Kopi"] },
                    { lang: ["Milk", "Leite", "Susu"] },
                    { lang: ["Fruits Juice", "Suco de Frutas", "Jus buah"] },
                    { lang: ["Orange Juice", "Suco de Laranja", "Jus jeruk"] },
                    { lang: ["Lemonade", "Limonada", "Limonade"] },
                    { lang: ["Mango Juice", "Suco de Manga", "Jus mangga"] },
                    { lang: ["Tea", "Chá", "Teh"] },
                    { lang: ["Beer", "Cerveja", "Bir"] },
                    { lang: ["Wine", "Vinho", "Anggur merah"] },
                    { lang: ["Cocktail", "Coquetel", "Koktail"] }
                ]
            },
            {
                id: 2,
                name: "Fruits",
                words: [
                    { lang: ["Mango", "Manga", "Mangga"] },
                    { lang: ["Apple", "Maçã", "Apel"] },
                    { lang: ["Banana", "Banana", "Pisang"] },
                    { lang: ["Orange", "Laranja", "Jeruk"] },
                    { lang: ["Wine", "Vinho", "Anggur"] },
                    { lang: ["Pineapple", "Abacaxi", "Nanas"] },
                    { lang: ["Dragon Fruit", "Pitaia", "Buah naga"] },
                    { lang: ["Pear", "Pera", "Pir"] },
                    { lang: ["Guava", "Goiaba", "Jambu biji"] },
                    { lang: ["Watermelon", "Melancia", "Semangka"] },
                    { lang: ["Jackfruit", "Jaca", "Nangka"] },
                    { lang: ["Durian", "Durian", "Durian"], show: [false, false, true] },
                    { lang: ["Passion Fruit", "Maracuja", "Markisa"] }
                ]
            },
            {
                id: 3,
                name: "Vegetables",
                words: [
                    { lang: ["Salad", "Salada", "Salad"] },
                    { lang: ["Tomato", "Tomate", "Tomat"] },
                    { lang: ["Lettuce", "Alface", "Selada"] },
                    { lang: ["Cassava", "Mandioca", "Singkong"] },
                    { lang: ["Eggplant", "Berinjela", "Terong"] },
                    { lang: ["Cucumber", "Pepino", "Timun"] },
                    { lang: ["Potato", "Batata", "Kentang"] },
                    { lang: ["Carrot", "Cenoura", "Wortel"] },
                    { lang: ["Cauliflower", "Couve flor", "Kembang kol"] },
                    { lang: ["Cabbage", "Repolho", "Kubis"] }
                ]
            },
            {
                id: 4,
                name: "Grains and nuts",
                words: [
                    { lang: ["Rice", "Arroz", "Beras"], obs: [null, null, 'Raw'] },
                    { lang: ["Corn", "Milho", "Jagung"] },
                    { lang: ["Pea", "Ervilha", "Kacang polong"] },
                    { lang: ["Soya", "Soja", "Kedelai"] },
                    { lang: ["Peanut", "Amendoim", "Kacang tanah"] },
                    { lang: ["Walnut", "Noz", "Kenari"] },
                    { lang: ["Chestnut", "Castanha", "Kacang mete"] },
                    { lang: ["Hazelnut", "Avelã", "Kacang hazel"] },
                    { lang: ["Almond", "Amêndoa", "Kacang almond"] },
                    { lang: ["Beans", "Feijão", "Kacang pool"] }, 
                    { lang: ["Green beans", "Feijão verde", "Kacang polong"], show: [false, false, true] },
                    { lang: ["Candlenut", "Nogueira", "Kemiri"], show: [false, false, true] }, //white condiment
                    { lang: ["Red beans", "Feijão vermelho", "Kacang merah"] }  //nuts= any nuts, kacang = any nuts or beans
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Biology", icon: "fa-leaf",
        decks: [
            {
                id: 0,
                name: "Animals",
                words: [
                    { lang: ["Dog", "Cachorro", "Anjing"] },
                    { lang: ["Cat", "Gato", "Kucing"] },
                    { lang: ["Bird", "Pássaro", "Burung"] },
                    { lang: ["Tiger", "Tigre", "Harimau"] },
                    { lang: ["Horse", "Cavalo", "Kuda"] },
                    { lang: ["Dragon", "Dragão", "Naga"] },
                    { lang: ["Elephant", "Elefante", "Gajah"] },
                    { lang: ["Duck", "Pato", "Bebek"] },
                    { lang: ["Monkey", "Macaco", "Monyet"] },
                    { lang: ["Crocodile", "Crocodilo", "Buaya"] },
                    { lang: ["Cow", "Vaca", "Sapi"] },
                    { lang: ["Chicken", "Galinha", "Ayam"] },
                    { lang: ["Pig", "Porco", "Babi"] },
                    { lang: ["Buffalo", "Bufalo", "Kerbau"] },
                    { lang: ["Gorilla", "Gorila", "Gorila"] },
                    { lang: ["Giraffe", "Girafa", "jerapah"] },
                    { lang: ["Quail", "Codorna", "Puyuh"] }
                ]
            },
            {
                id: 1,
                name: "Body Level 1",
                words: [
                    { lang: ["Head", "Cabeça", "Kepala"] },
                    { lang: ["Hair", "Cabelo", "Rambut"] },
                    { lang: ["Nose", "Nariz", "Hidung"] },
                    { lang: ["Eye", "Olho", "Mata"] },
                    { lang: ["Ear", "Orelha", "Telinga"] },
                    { lang: ["Neck", "Pescoço", "Leher"] },
                    { lang: ["Shoulder", "Ombro", "Bahu"] },
                    { lang: ["Chest", "Peito", "Dada"] },
                    { lang: ["Belly", "Barriga", "Perut"] },
                    { lang: ["Back", "Costas", "Kembali"] },
                    { lang: ["Arm", "Braço", "Lengan"] },
                    { lang: ["Finger", "Dedo", "Jari"] },
                    { lang: ["Leg", "Perna", "Kaki"] },
                    { lang: ["Foot", "Pé", "Telapak kaki"] }
                ]
            },
            {
                id: 2,
                name: "Body Level 2",
                words: [
                    { lang: ["Eyebrow", "Sombrancelha", "Alis"] },
                    { lang: ["Eyelashes", "Cilhos", "Bulu mata"] },
                    { lang: ["Cheek", "Bochecha", "Pipi"] },
                    { lang: ["Chin", "Queixo", "Dagu"] },
                    { lang: ["Moustache", "Bigode", "Kumis"] },
                    { lang: ["Elbow", "Cotovelo", "Siku"] },
                    { lang: ["Nail", "Unha", "Paku"] },
                    { lang: ["Butt", "Bunda", "Bokong"] },
                    { lang: ["Toe", "Dedo do pé", "Jari kaki"] },
                    { lang: ["Knee", "Joelho", "Lutut"] },
                    { lang: ["Thigh", "Coxa", "Paha"] },
                    { lang: ["Calf", "Panturrilha", "Betis"] },
                    { lang: ["Ankle", "Tornozelo", "Pergelangan kaki"] }
                ]
            },
            {
                id: 3,
                name: "Relatives",
                words: [
                    { lang: ["Son", "Filho", "Anak laki-laki"] },
                    { lang: ["Daughter", "Filha", "Anak Perampuan"] },
                    { lang: ["Sister", "Irmã", "Kakak Perampuan"], obs: [null, null, "Older"] },
                    { lang: ["Brother", "Irmão", "Adik Perampuan"], obs: [null, null, "Younger"], show: [false, false, true] },
                    { lang: ["Brother", "Irmão", "Kakak Laki-laki"], obs: [null, null, "Older"] },
                    { lang: ["Brother", "Irmão", "Adik Laki-laki"], obs: [null, null, "Younger"], show: [false, false, true] },
                    { lang: ["Saudara", "Irmãos", "Sibling"] },
                    { lang: ["Sibling-in-law", "Cunhado", "ipar"] },
                    { lang: ["Parents", "Pais", "Orang tua"] },
                    { lang: ["Parent-in-law", "Sogro", "Mertua"] },
                    { lang: ["Grandmother", "Pai", "Bapak"] },
                    { lang: ["Grandmother", "Mãe", "Ibu"] },
                    { lang: ["Grandchild", "Neto", "Cucu"] },
                    { lang: ["Grandfather", "Avô", "Kakek"] },
                    { lang: ["Grandmother", "Avó", "Nekek"] },
                    { lang: ["Great Grandchild", "Bisneto", "Cicit"] },
                    { lang: ["Boyfriend", "Namorado", "Pacar"] },
                    { lang: ["Wife", "Esposa", "Istri"] },
                    { lang: ["Husband", "Marido", "Suami"] },
                    { lang: ["Uncle", "Tio", "Paman"] },
                    { lang: ["Aunt", "Tia", "Bibi"] },
                    { lang: ["Cousin", "Primo", "Sepupu"] },
                    { lang: ["Friend", "Amigo", "Teman"] }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "General Adjectives", icon: "fa-eye",
        decks: [
            {
                id: 0,
                name: "General 1",
                words: [
                    { lang: ["Hard", "Difícil", "Keras"] },
                    { lang: ["Easy", "Fácil", "Mudah"] }
                ]
            },
            {
                id: 0,
                name: "Appearance",
                words: [
                    { lang: ["Beautiful", "Linda", "Cantik"] },
                    { lang: ["Handsome", "Lindo", "Tampan"] }
                ]
            }
        ]
    }
  ]

  getWordAlbums = function () {
      return this.albums;
  }
}
