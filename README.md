# 🧮 Ejercicios de Lógica en JavaScript (20 Problemas)

## 📌 Información General

**Curso:** Desarrollo Web
**Institución:** IDAT
**Lenguaje:** JavaScript
**Autor:** Harol Contreras

Este repositorio contiene una colección de **20 ejercicios de lógica de programación** desarrollados en JavaScript.
El objetivo principal es reforzar conceptos fundamentales como:

* Variables
* Condicionales (`if`, `else`)
* Operadores lógicos
* Entrada de datos (`prompt`)
* Validación de datos
* Uso de objetos
* Buenas prácticas (código limpio)

---

## 📂 Estructura

Cada ejercicio está resuelto en JavaScript y puede ejecutarse en consola del navegador o en un entorno como VS Code.

---

### 🔹 Ejercicio que mas me gustó

#### 📖 Enunciado

Realizar un programa que calcule el total a pagar de acuerdo a la distancia recorrida por un vehículo, considerando un cargo extra por los litros consumidos.

**Condiciones:**

* Tipo de vehículo:

  * `coche` → 0.20 por km
  * `moto` → 0.10 por km
  * `autobus` → 0.5 por km

* Litros consumidos:

  * Entre 0 y 100 → +5 al total
  * Más de 100 → +10 al total

#### 🧮 Fórmula

```
total = (precio_km × kms_recorridos) + extra_por_litros
```

---

#### 💻 Solución en JavaScript

```javascript
function calcularTotal() {
    const vehiculo = {
        coche: 0.20,
        moto: 0.10,
        autobus: 0.5
    };

    let total = 0;

    const tipoVehiculo = prompt("Ingrese el tipo de vehículo: \n - coche \n - moto \n - autobus").toLowerCase();
    const litros = Number(prompt("Ingrese la cantidad de litros consumidos:"));
    const kms = Number(prompt("Ingrese la cantidad de kilómetros recorridos:"));

    if (!vehiculo[tipoVehiculo]) {
        console.log("No tenemos este tipo de vehículo");
        return;
    }

    if (isNaN(litros) || isNaN(kms)) {
        console.log("Debes ingresar valores numéricos válidos");
        return;
    }

    total = vehiculo[tipoVehiculo] * kms;

    if (litros >= 0 && litros <= 100) {
        total += 5;
    } else if (litros > 100) {
        total += 10;
    }

    console.log(`El total a pagar es de: ${total}`);
}

calcularTotal();
```

---

## ✅ Buenas Prácticas Aplicadas

* ✔️ Uso de funciones para encapsular lógica
* ✔️ Validación de datos de entrada
* ✔️ Uso de objetos para evitar múltiples condicionales
* ✔️ Uso de `return` para control de flujo (early return)
* ✔️ Código limpio y legible

---

## 🚀 Cómo ejecutar

1. Abrir el archivo en un navegador
2. Abrir la consola (`F12`)
3. Ejecutar el script
4. Ingresar los datos solicitados

---

## 📌 Notas

Este conjunto de ejercicios forma parte del proceso de aprendizaje en programación, con enfoque en desarrollar lógica sólida antes de avanzar a tecnologías más complejas como:

* Frontend (HTML, CSS, JavaScript)
* Backend (Node.js, Python)
* Data Science

---

✨ *"La lógica es la base de todo programador."*
