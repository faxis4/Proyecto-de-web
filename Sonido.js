// Declaración de los datos de la aplicación web Mspotify para los idiomas español, inglés y coreano
const SonidoApp = {
  // Datos del idioma español: letras, números y palabras con su pronunciación
  español: {
    speechLang: "español-ES",

    // Letras del abecedario en español
    letras: [
      { simbolo: "A", decir: "A" }, { simbolo: "B", decir: "Be" },
      { simbolo: "C", decir: "Ce" }, { simbolo: "D", decir: "De" },
      { simbolo: "E", decir: "E" }, { simbolo: "F", decir: "Efe" },
      { simbolo: "M", decir: "Eme" }, { simbolo: "Ñ", decir: "Eñe" },
      { simbolo: "O", decir: "O" }, { simbolo: "R", decir: "Erre" },
      { simbolo: "S", decir: "Ese" }, { simbolo: "U", decir: "U" }
    ],

    // Números del 1 al 10 en español
    numeros: [
      { simbolo: "1", decir: "uno" }, { simbolo: "2", decir: "dos" },
      { simbolo: "3", decir: "tres" }, { simbolo: "4", decir : "cuatro" },
      { simbolo: "5", decir: "cinco" }, { simbolo: "6", decir: "seis" },
      { simbolo: "7", decir: "siete" }, { simbolo: "8", decir: "ocho" },
      { simbolo: "9", decir: "nueve" }, { simbolo: "10", decir: "diez" }
    ],

    // Palabras comunes en español
    palabras: [
      { simbolo: "Gato", decir: "gato" },
      { simbolo: "Perro", decir: "perro" },
      { simbolo: "Manzana", decir: "manzana" },
      { simbolo: "Pan", decir: "pan" },
      { simbolo: "Rojo", decir: "rojo" },
      { simbolo: "Azul", decir: "azul" },
      { simbolo: "Sol", decir: "sol" },
      { simbolo: "Luna", decir: "luna" },
      { simbolo: "Agua", decir: "agua" },
      { simbolo: "Casa", decir: "casa" },
      { simbolo: "Libro", decir: "libro" },
      { simbolo: "Pájaro", decir: "pájaro" }
    ]
  },

  // Datos del idioma inglés: letras, números y palabras con su pronunciación
  ingles: {
    speechLang: "english-US",

    // Letras del alfabeto en inglés
    letras: [
      { simbolo: "A", decir: "A" }, { simbolo: "B", decir: "B" },
      { simbolo: "C", decir: "C" }, { simbolo: "D", decir: "D" },
      { simbolo: "E", decir: "E" }, { simbolo: "F", decir: "F" },
      { simbolo: "M", decir: "M" }, { simbolo: "Q", decir: "Q" },
      { simbolo: "O", decir: "O" }, { simbolo: "R", decir: "R" },
      { simbolo: "S", decir: "S" }, { simbolo: "U", decir: "U" }
    ],

    // Números del 1 al 10 en inglés
    numeros: [
      { simbolo: "1", decir: "one" }, { simbolo: "2", decir: "two" },
      { simbolo: "3", decir: "three" }, { simbolo: "4", decir: "four" },
      { simbolo: "5", decir: "five" }, { simbolo: "6", decir: "six" },
      { simbolo: "7", decir: "seven" }, { simbolo: "8", decir: "eight" },
      { simbolo: "9", decir: "nine" }, { simbolo: "10", decir: "ten" }
    ],

    // Palabras comunes en inglés
    palabras: [
      { simbolo: "Cat", decir: "cat" },
      { simbolo: "Dog", decir: "dog" },
      { simbolo: "Apple", decir: "apple" },
      { simbolo: "Bread", decir: "bread" },
      { simbolo: "Red", decir: "red" },
      { simbolo: "Blue", decir: "blue" },
      { simbolo: "Sun", decir: "sun" },
      { simbolo: "Moon", decir: "moon" },
      { simbolo: "Water", decir: "water" },
      { simbolo: "House", decir: "house" },
      { simbolo: "Book", decir: "book" },
      { simbolo: "Bird", decir: "bird" }
    ]
  },

  // Datos del idioma coreano: letras, números y palabras con su pronunciación
  coreano: {
    speechLang: "coreano-KR",

    // Letras del alfabeto hangul
    letras: [
      { simbolo: "ㄱ", decir: "기역" }, { simbolo: "ㄴ", decir: "니은" },
      { simbolo: "ㄷ", decir: "디귿" }, { simbolo: "ㄹ", decir: "리을" },
      { simbolo: "ㅁ", decir: "미음" }, { simbolo: "ㅂ", decir: "비읍" },
      { simbolo: "ㅅ", decir: "시옷" }, { simbolo: "ㅇ", decir: "이응" },
      { simbolo: "ㅏ", decir: "아" }, { simbolo: "ㅓ", decir: "어" },
      { simbolo: "ㅗ", decir: "오" }, { simbolo: "ㅜ", decir: "우" }
    ],

    // Números del 1 al 10 en coreano (sistema nativo)
    numeros: [
      { simbolo: "1", decir: "하나" }, { simbolo: "2", decir: "둘" },
      { simbolo: "3", decir: "셋" }, { simbolo: "4", decir: "넷" },
      { simbolo: "5", decir: "다섯" }, { simbolo: "6", decir: "여섯" },
      { simbolo: "7", decir: "일곱" }, { simbolo: "8", decir: "여덟" },
      { simbolo: "9", decir: "아홉" }, { simbolo: "10", decir: "열" }
    ],

    // Palabras comunes en coreano
    palabras: [
      { simbolo: "고양이",decir: "고양이" },
      { simbolo: "개", decir: "개" },
      { simbolo: "사과", decir: "사과" },
      { simbolo: "빵", decir: "빵" },
      { simbolo: "빨강", decir: "빨강" },
      { simbolo: "파랑", decir: "파랑" },
      { simbolo: "해", decir: "해" },
      { simbolo: "달", decir: "달" },
      { simbolo: "물", decir: "물" },
      { simbolo: "집", decir: "집" },
      { simbolo: "책", decir: "책" },
      { simbolo: "새", decir: "새" }
    ]
  }
};
// Declaración de la variable global "datos" que contiene los datos de la aplicación web Mspotify
const datos = SonidoApp;
