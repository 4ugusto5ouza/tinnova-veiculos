import {
  Box,
  Stack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export const VeiculosGrid = () => {
  return (
    <Box w={"100%S"} h={"100%"}>
      <Stack direction={"row"}>
        <Box w={"100%"} h={"100%"}>
          {/* <ActionsBar  idAvisoFerias={selectedAvisoFerias.id} /> */}
          <button>Adicionar</button>
          <button>Editar</button>
          <button>Deletar</button>
          <TableContainer>
            <Table variant="simple" size={"sm"} w={"100%"} h={"100%"}>
              <Thead>
                <Tr>
                  <Th>Veículo</Th>
                  <Th>Marca</Th>
                  <Th>Ano</Th>
                  <Th>Descrição</Th>
                  <Th>Data Resgistro</Th>
                  <Th>Vendido</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                    <Td>{"Ford Hatch"}</Td>
                    <Td>Ford</Td>
                    <Td>{"2012"}</Td>
                    <Td>{"Ford 2012 único dono"}</Td>
                    <Td>{"21/09/2022"}</Td>
                    <Td>{"Não"}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
};
