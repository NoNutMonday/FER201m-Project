import React from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setAccounts, setToken } from "../../../core/redux/auth";
import { toast } from "react-hot-toast";

export default function UserList() {
    const queryClient = useQueryClient()

    const dispatch = useDispatch()


    const state = useSelector(state => state.auth.accounts)

    const handleChange = (id) => {

        const account = state?.find(item => item.id === id)

        const newAccount = {
            ...account,
            status: account.status === 1 ? 0 : 1
        }

        mutation.mutate(newAccount)
        toast.success('Update Success !')
    }

    const mutation = useMutation({
        mutationFn: (newAccount) => fetch(`http://localhost:9999/accounts/${newAccount?.id}`, {
            method: 'PUT',
            body: JSON.stringify(newAccount),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }

        })
            .then(res => res.json())
            .then(data => {
                dispatch(setAccounts({ account: data }))

            }),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['accounts'] })
        }
    })

    return (
        <Container fluid>
            <Row>
                <Col md="12">
                    <Card className="card-plain table-plain-bg">
                        <Card.Header>
                            <Card.Title as="h4">User Table Data</Card.Title>
                            <p className="card-category">
                                Here is a subtitle for this table
                            </p>
                        </Card.Header>
                        <Card.Body className="table-full-width table-responsive px-0">
                            <Table className="table-hover" id='data'>
                                <thead>
                                    <tr>
                                        <th className="border-0">ID</th>
                                        <th className="border-0">User Name</th>
                                        <th className="border-0">Name</th>
                                        <th className="border-0">Email</th>
                                        <th className="border-0">Phone</th>
                                        <th className="border-0">Address</th>
                                        <th className="border-0">Status</th>
                                        <th className="border-0"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        state?.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.userName}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>
                                                    <Badge bg={item.status === 1 ? 'success' : 'danger'} text="light">{item.status === 1 ? 'Active' : 'Block'}</Badge>
                                                </td>
                                                <td>
                                                    <Button variant={item.status === 1 ? 'danger' : 'success'} size="sm" onClick={() => handleChange(item.id)}>
                                                        {item.status === 1 ? 'Block' : 'Unlock'}
                                                    </Button>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}