import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

        @Get()
        async getAllCustomers(): Promise<Customer[]> {
            return this.customerService.findAll()
        }

        @Get(':id')
        async getCustomer(
            @Param('id')
            id: string
        ): Promise<Customer> {
            return this.customerService.findById(id)
        }

        @Delete(':id')
        async deleteCustomer(
            @Param('id')
            id: string
        ): Promise<Customer> {
            return this.customerService.deleteById(id)
        }

        @Post()
        async createCustomer(
            @Body()
            customer: CreateCustomerDto
        ): Promise<Customer> {
            return this.customerService.create(customer)
        }

        @Put(':id')
        async updateCustomer(
            @Param('id')
            id: string,
            @Body()
            customer: UpdateCustomerDto
        ): Promise<Customer> {
            return this.customerService.updateById(id, customer)
        }
    }
