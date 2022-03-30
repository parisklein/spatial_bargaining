import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Circles = () => {
    const Chart = useRef()

    const data = [
        { category: 'A', count: 20 },
        { category: 'B', count: 100 },
        { category: 'C', count: 80 },
        { category: 'D', count: 12 },
        { category: 'E', count: 43 },
        { category: 'F', count: 72 },
    ]

    const width = window.innerWidth - 100
    const height = window.innerHeight - 50

    useEffect(() => {
        const svg = d3.select(Chart.current)
            .attr('width', width)
            .attr('height', height)
            //.style('background-color', 'yellow')

        var x = d3.scaleLinear()
            .domain([0, data.length])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(3))

        //Category labels
        svg.append('g')
            .selectAll('text')
            .data(data)
            .join('text')
            .text(d => d.category)
            .attr('x', (d, i) => x(i))
            .attr('y', height/3)
            .attr('fill', 'black')
            .style('font-size', 20)


        //Circles
        svg.append('g')
            .selectAll('circle')
            .data(data)
            .join('circle')
            .attr('r', d => d.count)
            .attr('cx', (d, i) => x(i) + d.count)
            .attr('cy', 200)
            .attr('fill', 'blue')



            
    })
    return (
        <div>
            <svg ref={Chart}></svg> 
        </div>

    );
}
export default Circles;