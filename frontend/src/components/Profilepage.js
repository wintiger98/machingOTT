import React, {Component} from "react";
import Customer from "./Customer";
import {Table, TableBody, TableCell, TableRow, TableHead, withStyles} from "@material-ui/core";

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

// 프로필 화면은 자기꺼만 보여줘야함
// 한개만
const customer = {
    'id': 1,
    'image': 'https://placeimg.com/150/150/1',
    'name': '서명교',
    'birthday': '980823',
    'sex': 'Male',
    'job': 'Student',
    'joinedGroup': 'NETFLIX',
}


class Profilepage extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>현재 가입 중인 그룹</TableCell>
                            <TableCell>{customer.joinedGroup}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
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
                        <Customer id={customer.id} image={customer.image} name={customer.name}
                                  birthday={customer.birthday} sex={customer.sex} job={customer.job}/>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(styles)(Profilepage);