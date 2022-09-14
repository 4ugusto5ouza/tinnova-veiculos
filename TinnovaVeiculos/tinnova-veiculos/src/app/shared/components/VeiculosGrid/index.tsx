import {
  Box,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAll } from "../../../services/api";
import { VeiculoVIewModel } from "../../models/VeiculoViewModel";

export const VeiculosGrid = () => {
  const [veiculos, setVeiculos] = useState<VeiculoVIewModel[]>([]);

  useEffect(() => {
    const res = getAll<VeiculoVIewModel>("Veiculo/GetAll")
      .then((response) => setVeiculos(() => response))
      .catch((error) => console.log(error));
  }, []);
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
                {veiculos &&
                  veiculos.map((veiculo) => {
                    return (
                      <Tr>
                        <Td>{"Ford Hatch"}</Td>
                        <Td>Ford</Td>
                        <Td>{"2012"}</Td>
                        <Td>{"Ford 2012 único dono"}</Td>
                        <Td>{"21/09/2022"}</Td>
                        <Td>{"Não"}</Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
};
