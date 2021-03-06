import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'

class Edit extends Component {
    state = {
        person: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        let id;
        this.props.person.map(item => {
            // ime = item.ime;
            // prezime = item.prezime;
            // brojKartona = item.brojKartona;
            // datumRodjenja = item.datumRodjenja;
            // spol = item.spol;
            id = item.id;
        })
        const brojKartona = e.target.elements.brojKartona.value;
        const ime = e.target.elements.ime.value;
        const prezime = e.target.elements.prezime.value;
        let datumRodjenja = e.target.elements.datumRodjenja.value;
        let spol = e.target.elements.spol.value
        const person = {
            brojKartona,
            ime,
            prezime,
            datumRodjenja,
            spol,
            id,
        }
        this.setState({person})
        this.props.addPerson(person)
    }

    render() {
        const {id, person} = this.props
        if (id !== null) {

            ///Generiraj komponentu na osnovu dobivenog person
            let editedPerson = person.map(item =>
                <Form key={item.id} ref={"myForm"} onSubmit={this.onSubmit}>
                    <Form.Group>

                        <Form.Control name="brojKartona"
                                      type="text"
                                      placeholder="Broj Kartona"
                                      defaultValue={item.brojKartona}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="ime"
                                      type="text"
                                      placeholder={"Ime"}
                                      defaultValue={item.ime}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="prezime"
                                      type="text"
                                      placeholder={"Prezime"}
                                      defaultValue={item.prezime}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="datumRodjenja"
                                      type="text"
                                      defaultValue={item.datumRodjenja}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select"
                                      name={"spol"}
                                      defaultValue={item.spol}
                        >
                            <option name="spol">Spol</option>
                            <option name="male" value={"Muški"}>Muški</option>
                            <option name="female" value={"Ženski"}>Ženski</option>
                        </Form.Control>
                    </Form.Group>

                    <button className="btn btn-primary btn-block"
                    >Spremi
                    </button>
                </Form>
            )
            // let ime , prezime ,brojKartona ,spol ,datumRodjenja = ""
            let info;
            const styles = {
                span: {
                    textAlign: "center",
                    fontSize:25

                }

            }
            if (this.state.person) {
                const {ime, prezime, brojKartona, spol, datumRodjenja} = this.state.person
                // setTimeout()
                // info = ` ${brojKartona} ${ime} ${prezime} ${datumRodjenja} ${spol}`


            }
            return (
                <div>
                    {editedPerson}
                    <div style={styles.span} className={"m-2"}>
                        <span>{info}</span>

                    </div>
                </div>
            );
        } else {
            return (null)
        }
    }
}

export default Edit;