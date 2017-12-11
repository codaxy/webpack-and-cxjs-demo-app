import {HtmlElement, FlexCol, PureContainer, TextField, NumberField, MonthField, Select, Button, Grid, Pagination, Link, List, Text, ValidationGroup} from 'cx/widgets';
import Controller from './Controller';

export default <cx>
    <FlexCol controller={Controller} style="height: 100%">
        <PureContainer putInto="header">
            <h2>Orders</h2>
            <div style="flex: 1"/>
            <div style="margin: -10px">
                <Button mod="hollow" icon="loading" visible:expr="{$page.loading}" name="refresh"/>
                &nbsp;
                <Button text="New Order" onClick="onNewOrder"/>
            </div>
        </PureContainer>
        <Grid
            records:bind="$page.records"
            mod="orders"
            style="flex: 1"
            scrollable
            border={false}
            remoteSort
            lockColumnWidths
            sorters:bind="$page.filter.sorters"
            columns={[
                {
                    field: 'orderNo', sortable: true,
                    items: <cx>
                        <Link href:tpl="~/orders/{$record.id}" text:tpl="{$record.orderNo}"/>
                    </cx>,
                    header: {
                        style: 'width: 150px',
                        items: <cx>
                            <div>
                                Order No.
                                <br/>
                                <NumberField style="width:100%;margin-top:5px" value:bind="$page.filter.orderNo"
                                             reactOn="enter blur"/>
                            </div>
                        </cx>
                    },
                },
                {
                    field: 'date', format: 'd', sortable: true,
                    header: {
                        style: 'width: 220px',
                        items: <cx>
                            <div>
                                Date
                                <br/>
                                <MonthField style="width:100%;margin-top:5px" range from:bind="$page.filter.dateFrom"
                                            to:bind="$page.filter.dateTo"/>
                            </div>
                        </cx>
                    }
                },
                {
                    field: 'customer', sortable: true,
                    header: {
                        items: <cx>
                            <div>
                                Customer
                                <br/>
                                <TextField style="width:100%;margin-top:5px" value:bind="$page.filter.customer"/>
                            </div>
                        </cx>
                    }
                },
                {
                    field: 'country', sortable: true,
                    header: {
                        items: <cx>
                            <div>
                                Country
                                <br/>
                                <TextField style="width:100%;margin-top:5px" value:bind="$page.filter.country"/>
                            </div>
                        </cx>
                    }
                },
                {
                    field: 'city', sortable: true,
                    header: {
                        items: <cx>
                            <div>
                                City
                                <br/>
                                <TextField style="width:100%;margin-top:5px" value:bind="$page.filter.city"/>
                            </div>
                        </cx>
                    }
                },
                {header: 'Total', field: 'totalAmount', format: 'currency;;2', align: 'right', sortable: true},
            ]}>
        </Grid>
        <div style="margin-top: 15px">
            <Pagination page:bind="$page.page" pageCount:bind="$page.pageCount"/>
            <Select value:bind="$page.pageSize" style={{float: 'right'}}>
                <option value="5">5</option>
                <option value={10}>10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </Select>
        </div>
    </FlexCol>
</cx>;

