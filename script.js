import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      //do nothing
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] //Resultatsliste

  //Läuft Zeichen für Zeichen über den ganzen Text.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCase = currentElement.toUpperCase()
    //Mache currentElement uppercase
    result.push(upperCase)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  //func and tab

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // zähle das e
      count = count + 1
    } else if (currentElement === "E") {
      // zähle das E
      count = count + 1
    }
    //for and tab
  }
  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03) //link und tab

export function aufgabe04(args) {
  const input = args
  const result = []
  //func and tab

  let count = 0

  for (let i = 0; i < input.length; i++) {
    //zähle alle Wörter in einem Text
    const currentElement = input[i]
    if (currentElement === " ") {
      count = count + 1 //anstatt Wörter zählen wir hier die Leerzeichen nach einem Wort. Immer wenn ein Leerzeichen kommt wird count +1 erhöht.
    }
  }
  return count + 1 //am Ende wird count +1 erhöht, damit auh das letzte Wort das kein Leerzeichen nach sich hat gezählt wird.
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasUpperCaseLetter = false //lasse hasUpperCaseLetter = false sein bis ein Grossbuchstabe gefunden wird

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const UpperCaseLetter = currentElement.toUpperCase() //wenn Großbuchstabe gefunden wird, UpperCaseLetter = Großbuchstabe

    const LowerCaseLetter = UpperCaseLetter.toLowerCase()
    if (LowerCaseLetter === UpperCaseLetter) {
      //wenn ein Kleinbuchstabe gefunden wird
      // tu nichts
    } else if (currentElement === UpperCaseLetter) {
      hasUpperCaseLetter = true //wenn ein Großbuchstabe gefunden wird wird hasUpperCaseLetter = true, also bekommt man den Output true zurück
    }
  }
  return hasUpperCaseLetter //gib true oder false zurück
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const text = args
  const list = text

  for (let i = 0; i < input.length; i++) {
    const currentElement = list[i]
    const ascii = currentElement.charCodeAt(0)
    //überprüfe mit ACSII Werten ob das Zeichen ein Sonderzeichen ist
    if (ascii >= 48 && ascii <= 57) {
      // wenn ja, ignoriere das Zeichen
    } else if (ascii >= 65 && ascii <= 90) {
      // wenn ja, ignoriere das Zeichen
    } else if (ascii >= 97 && ascii <= 122) {
      // wenn ja, ignoriere das Zeichen
    } else {
      return true
    }
  }
  return false
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //speichert das aktuelle Zeichen

    if (currentElement === "e") {
      result.push(3) //ersetze e mit 3
    } else {
      result.push(currentElement) //wenn Element nicht e soll einfach das nächste kommen
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args

  const len = input.length //Speichern der Länge in der Liste
  if (len === 6) {
    //Wenn Länge 6
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe12(args) {
  const input = args
  const result = []

  let pos = -1 //wenn keins gefunden wird ist die pos -1
  let foundE = false //foundE ist falsch, bis das erste E gefunden wird

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      if (foundE === false) {
        pos = i //wenn e gefunden wird speichere position
      }
      foundE = true
    } //verhindert dass mehr als das erste e bestimmt wird; man kann nur wenn man e noch nicht gefunden hat eine position speichern
  }
  return pos
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []

  let pos = -1
  let foundE = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      pos = i //jedes mal wenn e gefunden wird wird i überschrieben

      foundE = true
    }
  }
  return pos
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []
  // einfach nur text....
  let pos = -1
  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wenn du ein e findest, zähle es
    if (currentElement === "e") {
      //Zähle das e
      countE = countE + 1
      // nur genau dann wenn countE 3 ist, sollst du die position speichern
      if (countE === 3) {
        pos = i
      }
    }
  }

  return pos
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe20(args) {
  const input = args
  const result = []

  let pos = -1
  let countE = 0

  for (let i = 0; i < input.length; i++) {
    //prüfe ob nach jedem . ein Leerzeichen kommt
    const currentElement = input[i]
    if (currentElement === ".") {
      //prüfe ob ein Leerzeichen kommt
      if (input[i + 1] === " ") {
        // okay, mache weiter
      } else {
        return false
      }
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function bubbleSort(args) {
  const input = "oiwanalaifansnn>1SHD372521gbga>cqung"
  const liste = input.split("")

  for (let i = 0; i < liste.length - 1; i++) {
    const currentElement = liste[i]
    const nextElement = liste[i + 1]

    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      //vertausche die Elemente
      liste[i] = nextElement
      liste[i + 1] = currentElement

      i = -1
    }
    console.log(liste.join(""))
  }
  return liste.join("")
}

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)
