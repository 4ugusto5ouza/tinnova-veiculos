import {
  Box,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAll } from "../../../services/api";
import { VeiculoViewModel } from "../../models/VeiculoViewModel";
import { ActionsButtons } from "../ActionsButtons";
import { FormFilters } from "../FormFilters";

import "./styles.css";

export interface VeiculoFormFieldsProps {
  AnoFabricacaoMinimo?: number;
  AnoFabricacaoMaximo?: number;
  DataRegistroMinimo: string;
  DataRegistroMaximo: string;
  Marca: string;
}

export const VeiculosGrid = () => {
  const [veiculos, setVeiculos] = useState<VeiculoViewModel[]>([]);
  const [formFields, setFormFields] = useState<VeiculoFormFieldsProps>(
    {} as VeiculoFormFieldsProps
  );

  useEffect(() => {
    getAll<VeiculoViewModel>("Veiculo/GetAll", { filters: formFields })
      .then((response) => setVeiculos(() => response))
      .catch((error) => console.log(error));
  }, [formFields]);

  const handleSelectedClick = (id: number) => {
    const data = veiculos.map((x) => {
      x.selecionado = false;
      if (x.id === id) x.selecionado = true;
      return x;
    });
    setVeiculos(data);
  };

  const reloadGrid = () => {
    setFormFields({} as VeiculoFormFieldsProps);
  };

  function getVeiculoSelecionado(): VeiculoViewModel {
    const veiculo = veiculos.find((x) => x.selecionado);
    return veiculo as VeiculoViewModel;
  }
  return (
    <Box width={"100%"} height={"700px"}>
      <Stack direction={"row"}>
        <FormFilters formTitle="Fitros" handleSetFormFields={setFormFields} />
        <Box width={"100%"} height={"100%"}>
          <ActionsButtons
            veiculoSelecionado={getVeiculoSelecionado()}
            reloadGrid={reloadGrid}
          />
          <TableContainer>
            <Table variant="simple" size={"sm"} width={"100%"} height={"100%"}>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Veículo</Th>
                  <Th>Marca</Th>
                  <Th>Ano</Th>
                  <Th>Descrição</Th>
                  <Th>Data Resgistro</Th>
                  <Th>Data Atualização</Th>
                  <Th>Vendido</Th>
                </Tr>
              </Thead>
              <Tbody>
                {veiculos &&
                  veiculos.map((veiculo) => {
                    return (
                      <Tr
                        className={
                          veiculo.selecionado ? "selecionado" : "row-hover"
                        }
                        onClick={() => handleSelectedClick(veiculo.id)}
                        key={veiculo.id}
                      >
                        <Td>{veiculo.id}</Td>
                        <Td>{veiculo.modelo}</Td>
                        <Td>{veiculo.marca}</Td>
                        <Td>{veiculo.anoFabricacao}</Td>
                        <Td>
                          <Text
                            overflow={"hidden"}
                            textOverflow={"ellipsis"}
                            width={"230px"}
                          >
                            {veiculo.descricao}
                          </Text>
                        </Td>
                        <Td>
                          {new Date(veiculo.dataRegistro).toLocaleDateString()}
                        </Td>
                        <Td>
                          {veiculo.dataAtualizacao
                            ? new Date(
                                veiculo.dataAtualizacao
                              ).toLocaleDateString()
                            : ""}
                        </Td>
                        <Td>
                          {veiculo.vendido ? (
                            <Text
                              color="green"
                              fontSize={"12px"}
                              fontWeight={700}
                            >
                              {"SIM"}
                            </Text>
                          ) : (
                            <Text
                              color="red"
                              fontSize={"12px"}
                              fontWeight={700}
                            >
                              {"NÃO"}
                            </Text>
                          )}
                        </Td>
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
