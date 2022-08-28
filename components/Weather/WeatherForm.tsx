import { Button, Form, Input, Space } from "antd"
import { Typography } from "antd"
const { Title } = Typography

interface Props {
    setCity: (event: string) => void
    callApi: () => void
}

const WeatherForm = ({ setCity, callApi }: Props) => {
    return (
        <Space>
            <Form layout="horizontal">
                <Space>
                    <Space direction="vertical">
                        <Title level={2} style={{ color: "white" }}>
                            Select a City
                        </Title>
                        <Form.Item style={{ color: "white" }}>
                            <Input placeholder="Search a City" style={{ width: 300 }} onChange={(event) => setCity(event.target.value)} />
                            <Button type="primary" style={{ marginLeft: 8 }} onClick={callApi}>
                                Search
                            </Button>
                        </Form.Item>
                    </Space>
                </Space>
            </Form>
        </Space>
    )
}

export default WeatherForm
