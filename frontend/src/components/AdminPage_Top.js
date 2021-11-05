import React, {Component} from "react";
import Customer from "./Customer";
import {Table, TableBody, TableCell, TableRow, TableHead ,withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "scroll"
    },
    table: {
        minWidth: 1080
    }
});

// customer 배열
const customerArray = [
    {
        'id': 1,
        'image': 'https://placeimg.com/150/150/1',
        'name': '서명교',
        'birthday': '980823',
        'sex': 'Male',
        'job': 'Student',
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/150/150/2',
        'name': '김윤호',
        'birthday': '980111',
        'sex': 'Female',
        'job': 'SalaryMan',
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/150/150/3',
        'name': '임유성',
        'birthday': '980517',
        'sex': 'Male',
        'job': 'None',
    }
]

class AdminPage_Top extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customerArray.map(c => {
                                return <Customer key={c.id} id={c.id} image={c.image} name={c.name}
                                                 birthday={c.birthday} sex={c.sex} job={c.job}/>
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(styles)(AdminPage_Top);