const BD = {
  spaces: [{
    name: "Casa do Marcelo",
    assets: [
      {
        id: "19ad739e-d168-44ba-bbda-5ccfd7bbf9d6",
        name: "Quarto Principal",
        temperature: {
          mac: "6624724F1982",
          status: "high",
          value: 35
        },
        energies: [
          {
            id: "8b0f37a3-3cc0-4574-92f0-378e12f291b0",
            type: "tomada",
            name: "Cama",
            status: "on"
          },
          {
            id: "9c49aef8-b83e-4e3f-b1af-6b062a1a2d24",
            type: "tomada",
            name: "Computador",
            status: "off"
          },
          {
            id: "de1a5d57-7b4a-4947-9b74-f749edda9e8e",
            type: "tomada",
            name: "Televisão",
            status: "on"
          },
          {
            id: "345fdbe2-25c3-4c94-bda7-dc8b9b11884b",
            type: "lampada",
            name: "Leitura",
            status: "on"
          },
          {
            id: "b9a3c621-0087-4f88-b07d-36be85030345",
            type: "lampada",
            name: "Geral",
            status: "off"
          }
        ]
      },
      {
        id: "8fda6861-e992-40da-b487-651f09b4206b",
        name: "Cozinha",
        temperature: {
          mac: "D169F9807788",
          status: "high",
          value: 25
        },
        energies: [
          {
            id: "7e43d2d3-85e8-4c8a-80ae-cb7f718dd4a7",
            type: "tomada",
            name: "Fogão",
            status: "off"
          },
          {
            id: "b18f9a4c-57e8-44d4-93c4-f5a4a67d5a30",
            type: "tomada",
            name: "Geladeira",
            status: "off"
          },
          {
            id: "1937b3f8-bae7-44f3-a64e-08f89bfa55de",
            type: "tomada",
            name: "Pia",
            status: "off"
          },
          {
            id: "19f648b9-33a7-43d3-9cfc-55bba5d9e214",
            type: "lampada",
            name: "Geral",
            status: "on"
          }
        ]
      },
      {
        id: "d9bc1aaa-4afe-4103-bf0a-bf70ca10affe",
        name: "Sala de Estar",
        temperature: {
          mac: "C16245137239",
          status: "low",
          value: 19
        },
        energies: [
          {
            id: "72a74f95-bd1b-4cf4-8b27-33a238c49161",
            type: "tomada",
            name: "Televisão",
            status: "on"
          },
          {
            id: "c05d2b0d-f4d1-49d2-8b07-f5ff16d59d67",
            type: "tomada",
            name: "Sofá",
            status: "off"
          },
          {
            id: "7e804313-3170-4c66-bd95-238aa142df07",
            type: "tomada",
            name: "Caixa de som",
            status: "off"
          },
          {
            id: "0e66b2cf-ea0d-4e66-bf93-8595d4b279a0",
            type: "lampada",
            name: "Ambiente",
            status: "off"
          },
          {
            id: "b056e4a5-b2ba-4c80-861b-9ea2cb7551ad",
            type: "lampada",
            name: "Geral",
            status: "off"
          }
        ]
      }
    ]
  }]
}

module.exports = { BD };