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
import { FormFilters } from "../FormFilters";

export interface VeiculoFormFieldsProps {
  anoFabricacaoMinimo: string;
  anoFabricacaoMaximo: string;
  dataRegistroMinimo: string;
  dataRegistroMaximo: string;
  marca: string;
}

export const VeiculosGrid = () => {
  const [veiculos, setVeiculos] = useState<VeiculoVIewModel[]>([]);
  const [formFields, setFormFields] = useState<VeiculoFormFieldsProps>(
    {} as VeiculoFormFieldsProps
  );

  useEffect(() => {
    getAll<VeiculoVIewModel>("Veiculo/GetAll", { filters: formFields })
      .then((response) => setVeiculos(() => response))
      .catch((error) => console.log(error));
  }, [formFields]);

  function handleSetFormFields({
    anoFabricacaoMinimo,
    anoFabricacaoMaximo,
    dataRegistroMinimo,
    dataRegistroMaximo,
    marca,
  }: VeiculoFormFieldsProps) {
    if (anoFabricacaoMinimo.length > 2)
      setFormFields((prevState) => ({ ...prevState, anoFabricacaoMinimo }));
    if (anoFabricacaoMaximo.length > 2)
      setFormFields((prevState) => ({ ...prevState, anoFabricacaoMaximo }));
    if (dataRegistroMinimo.length > 2)
      setFormFields((prevState) => ({ ...prevState, dataRegistroMinimo }));
    if (dataRegistroMaximo.length > 2)
      setFormFields((prevState) => ({ ...prevState, dataRegistroMaximo }));
    if (marca.length > 2)
      setFormFields((prevState) => ({ ...prevState, marca }));
  }

  return (
    <Box width={"100%"} height={"700px"}>
      <Stack direction={"row"}>
        <FormFilters
          formTitle="Fitros"
          handleSetFormFields={handleSetFormFields}
        />
        <Box width={"100%"} height={"100%"}>
          {/* <ActionsBar  idAvisoFerias={selectedAvisoFerias.id} /> */}
          <button>Adicionar</button>
          <button>Editar</button>
          <button>Deletar</button>
          <TableContainer>
            <Table variant="simple" size={"sm"} width={"100%"} height={"100%"}>
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
                      <Tr key={veiculo.id}>
                        <Td>{veiculo.modelo}</Td>
                        <Td>{veiculo.marca}</Td>
                        <Td>{veiculo.anoFabricacao}</Td>
                        <Td>{veiculo.descricao}</Td>
                        <Td>
                          {new Date(veiculo.dataRegistro).toLocaleDateString()}
                        </Td>
                        <Td>{veiculo.vendido ? "SIM" : "NÃO"}</Td>
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
