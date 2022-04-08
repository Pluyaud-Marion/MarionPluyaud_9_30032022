/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"
import { ROUTES, ROUTES_PATH } from "../constants/routes.js";
import router from "../app/Router.js";
import { localStorageMock } from "../__mocks__/localStorage.js";



describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    test("Then I should click on 'Choisir un fichier' for add a new file", async () => {
      // test de possibilité d'ajouter un fichier dans les notes de frais
      const html = NewBillUI()
      document.body.innerHTML = html

      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }

      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))

      const newBill = new NewBill({
        document, onNavigate, store: null, localStorage: window.localStorage
      })

      const handleChangeFile = jest.fn((e) => newBill.handleChangeFile(e)) //on simule la fonction handleChangeFile

      const addFileButton = screen.getByTestId('file') //on récup le datatestId du bouton submit

      addFileButton.addEventListener('click', handleChangeFile) //on appelle la fonction au click
      userEvent.click(addFileButton) //on simule le click

      expect(handleChangeFile).toHaveBeenCalled() //on teste si la fonction a été appelée


      ///// ???????
      const error = screen.getByTestId("errorMessage")
      expect(error).toBeFalsy()

    })

    // test d'intégration POST 
    describe("And I submit a valid bill", () => {
      test("Then a new bill is created", async () => {
        const html = NewBillUI()
        document.body.innerHTML = html

        const onNavigate = (pathname) => {
          document.body.innerHTML = ROUTES({ pathname })
        }

        Object.defineProperty(window, 'localStorage', { value: localStorageMock })
        window.localStorage.setItem('user', JSON.stringify({
          type: 'Employee'
        }))

        const newBill = new NewBill({
          document, onNavigate, store: null, localStorage: window.localStorage
        })

        const simulBill = {
          type: "Restaurants et bars",
          name: 'Marion',
          amount: 300,
          date: "2008-08-08",
          vat: "60",
          pct: 20,
          commentary: "Repas équipe",
          fileUrl: "../src/img/restau.jpg",
          fileName: "restau.jpg",
        }

        const submitButton = screen.getByTestId('form-new-bill')

        const handleSubmit = jest.fn((e) => newBill.handleSubmit(e))

        newBill.create = (newBill) => newBill

        document.querySelector(`input[data-testid="expense-name"]`).value = simulBill.name
        document.querySelector(`input[data-testid="datepicker"]`).value = simulBill.date
        document.querySelector(`select[data-testid="expense-type"]`).value = simulBill.type
        document.querySelector(`input[data-testid="amount"]`).value = simulBill.amount
        document.querySelector(`input[data-testid="vat"]`).value = simulBill.vat
        document.querySelector(`input[data-testid="pct"]`).value = simulBill.pct
        document.querySelector(`textarea[data-testid="commentary"]`).value = simulBill.commentary
        newBill.fileUrl = simulBill.fileUrl
        newBill.fileName = simulBill.fileName

        submitButton.addEventListener("click", handleSubmit)
        userEvent.click(submitButton)
        expect(handleSubmit).toHaveBeenCalled()
      })

    })
  })
})
