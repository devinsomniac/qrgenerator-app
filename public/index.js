document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("btn-prop")
    const form = document.getElementById("qr-form")
    const qrValueHolder = document.getElementById("Qrplace")

    generateButton.addEventListener("click", (event) => {
        event.preventDefault()
        const formdata = new FormData(form)
        const searchParams = new URLSearchParams()

        for (pair of formdata) {
            searchParams.append(pair[0], pair[1])
        }

        fetch("/api/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: searchParams
        })
        .then(response => response.text())
        .then(data => {
            qrValueHolder.innerHTML = data

            // Delay the download by 3 seconds (3000 milliseconds)
            setTimeout(() => {
                const qrCodeImg = qrValueHolder.querySelector("img")
                if (qrCodeImg) {
                    const link = document.createElement("a")
                    link.href = qrCodeImg.src
                    link.download = "qr-image.png"
                    document.body.appendChild(link)

                    link.click()

                    document.body.removeChild(link)
                }
            }, 3000) // Change the delay time here as needed
        })
    })
})
